import "./App.css";
import Button from "./components/Button/Button";
import Avatar from "./components/Avatar/Avatar";
import Chip from "./components/Chips/Chip";
import CustomButton from "./components/CustomButton/CustomButton";
import Hero from "./components/Hero/Hero";

function App() {
  const names = [
    "Airidas",
    "Tomas",
    "Vytautas",
    "Jurate",
    "Robert",
    "Remigijus",
    "Judita",
  ];

  const fruits = [
    "Apple",
    "Bannana",
    "Orange",
    "Kiwi",
    "Pineapple",
    "Strawberries",
    "Berries",
  ];

  const colours = ["red", "green", "blue", "yellow"];
  return (
    <div>
      <section>
        <Avatar bgColor={"cornflowerblue"}>Airidas</Avatar>
        <Avatar>Haroldas</Avatar>
      </section>
      <section>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlindes</Button>
        <Button>Hey?</Button>
        <Button>Nope.</Button>
      </section>
      <section>
        <Chip label={"Deletable"} />
        <Chip label={"Deletable"} variant={"outlined"} />
      </section>
      <section>
        <CustomButton>Outlined</CustomButton>
        <CustomButton variant={"contained"}>Contained</CustomButton>
      </section>
      <section>
        <CustomButton>Airidas</CustomButton>
        <CustomButton>Tomas</CustomButton>
        <CustomButton>Vytautas</CustomButton>
      </section>
      {/* <section>
        {names.map((name) => (
          <CustomButton>{name}</CustomButton>
        ))}
      </section>
      <section>
        {[1, 2, 3, 4, 5, 6].map((numb) => (
          <div>{numb}</div>
        ))}
      </section>
      <section>
        <ul>
          {fruits.map((fruit) => (
            <li>{fruit}</li>
          ))}
        </ul>
      </section>
      <section>
        <ol>
          {colours.map((color) => (
            <li>{color}</li>
          ))}
        </ol>
      </section>
      <section>
        {colours.map((color) => (
          <Hero
            title={color}
            subtitle={`Mano megstamiausia spalva yra: ${color}`}
            color={color}
          />
        ))}
      </section>
      <section>
        {colours.map((color) => (
          <Button variant={"contained"}>{color}</Button>
        ))}
      </section> */}
    </div>
  );
}

export default App;
