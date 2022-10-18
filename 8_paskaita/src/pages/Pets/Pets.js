import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading/Index";
import DefaultLayout from "../../layouts/DefaultLayout";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import Shadow from "../../components/Shadow/Shadow";
import { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";

const Pets = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalClass, setModalClass] = useState("hidden");

  const deleteFunction = (id) => {
    fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/pets/" + id, {
      method: "DELETE",
    });
  };

  const modal = () => {
    setModalClass("");
  };

  const removeModal = () => {
    setModalClass("hidden");
  };

  const addPet = (e, name, dob, email) => {
    e.preventDefault();
    setModalClass("hidden");
    const myDate = dob.split("-");
    const newDate = new Date(myDate[0], myDate[1] - 1, myDate[2]);
    const dateTimestamp = +newDate.getTime();

    if (name && dob && email) {
      const option = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          dob: dateTimestamp,
          client_email: email,
        }),
      };
      fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/pets/", option)
        .then((res) => res.json())
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/pets")
        .then((resp) => resp.json())
        .then((response) => {
          return setPets(response);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, 1000);
  }, [pets]);


  return (
    <div>
      <Navbar />
      <DefaultLayout>
        <Heading title="Pet List" func={modal}>
          Add Pet
        </Heading>
        {loading && (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#eb5d05"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ marginLeft: "25px" }}
            wrapperClassName=""
            visible={true}
          />
        )}
        <Card petsList={pets} deleteFunction={deleteFunction} />
      </DefaultLayout>
      <Modal modalClass={modalClass} addPet={addPet} func={removeModal} />
      <Shadow className={modalClass} />
    </div>
  );
};

export default Pets;
