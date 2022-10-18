import NavBar from '../../components/Navbar';
import DefaultLayout from '../../layouts/DefaultLayout';
import Heading from '../../components/Heading/Index';
import MedsData from '../../components/MedsData/MedsData';
import Modal from '../../components/Modal/Modal';
import Shadow from '../../components/Shadow/Shadow';
import { useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Medications = (props) => {
  const [medications, setMedications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalClass, setModalClass] = useState('hidden');

  const modal = () => {
    setModalClass('');
  };

  const removeModal = () => {
    setModalClass('hidden');
  };

  const addMed = (e, name, description) => {
    e.preventDefault();
    setModalClass('hidden');

    if (name && description) {
      const option = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          description: description,
        }),
      };
      fetch('http://localhost:3000/medications', option)
        .then((res) => res.json())
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:3000/medications')
        .then((resp) => resp.json())
        .then((response) => {
          return setMedications(response);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, 1000);
  }, [medications]);
  return (
    <div>
      <NavBar />
      <DefaultLayout>
        <Heading title="Medications" func={modal}>
          Add Medication
        </Heading>
        {loading && (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#eb5d05"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ marginLeft: '25px' }}
            wrapperClassName=""
            visible={true}
          />
        )}
        <MedsData meds={medications} />
      </DefaultLayout>
      <Modal modalClass={modalClass} addMed={addMed} func={removeModal}>
        meds
      </Modal>
      <Shadow className={modalClass} />
    </div>
  );
};

export default Medications;
