//import

import Button from "../../components/Button";
import Heading from "../../components/Heading";
import NavigationBar from "../../components/NavigationBar";
import DefaultLayout from "../../layouts/DefaultLayout";

const Pets = () => {
  return (
    <div>
      <NavigationBar />
      <DefaultLayout>
        <Heading>Pet List</Heading>
        <Button variant="contained">Help</Button>
        <Button>Help</Button>
      </DefaultLayout>
    </div>
  );
};

export default Pets;
