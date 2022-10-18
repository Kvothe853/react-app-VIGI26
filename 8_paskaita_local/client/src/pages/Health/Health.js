import NavBar from '../../components/Navbar';
import Heading from '../../components/Heading/Index';
import DefaultLayout from '../../layouts/DefaultLayout';
import LogsData from '../../components/LogsData/LogsData';
import HealthRecords from '../../components/HealthRecords/HealthRecords';
import Modal from '../../components/Modal/Modal';
import Shadow from '../../components/Shadow/Shadow';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { response } from 'express';

const Health = (props) => {
  const [prescritpions, setPrescritpions] = useState([]);
  const [logs, setLogs] = useState([]);
  const [pet, setPet] = useState([{ name: '' }]);
  const [loading, setLoading] = useState(true);
  const [modalClass, setModalClass] = useState('hidden');

  const petId = useLocation().state;

  function addLog(e) {
    console.log('Added log');
  }

  function addPrescription(e, name) {
    e.preventDefault();
    removeModal();

    // if (name) {
    //   const option = {
    //     method: 'POST',
    //     headers: {
    //       'Content-type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       pet_id: petId,
    //       medication: name,
    //     }),
    //   };
    //   fetch('http://localhost:3000/prescriptions/', option)
    //     .then((res) => res.json())
    //     .then((response) => console.log(response))
    //     .catch((err) => console.log(err));
    // }
  }

  const modal = () => {
    setModalClass('');
  };

  const removeModal = () => {
    setModalClass('hidden');
  };

  useEffect(() => {
    fetch(`http://localhost:3000/pets/`)
      .then((resp) => resp.json())
      .then((response) => {
        const pet = response.filter((pet) => pet.id === petId);
        return setPet(pet);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/prescriptions/${petId}`)
      .then((resp) => resp.json())
      .then((response) => {
        return setPrescritpions(response);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/logs/${petId}`)
      .then((resp) => resp.json())
      .then((response) => {
        return setLogs(response);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <NavBar />
      <DefaultLayout>
        <Heading
          title={`${pet[0].name}: Health Records`}
          logs={prescritpions.name}
          addPrescription={addPrescription}
          addLog={addLog}
          modal={modal}
        >
          {['Add Prescription', 'Add Log']}
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
        <LogsData />
        <HealthRecords
          prescriptions={prescritpions}
          logs={logs}
        ></HealthRecords>
      </DefaultLayout>
      <Modal
        modalClass={modalClass}
        func={removeModal}
        petId={petId}
        addPrescription={addPrescription}
      >
        health
      </Modal>
      <Shadow className={modalClass} />
    </div>
  );
};

export default Health;
