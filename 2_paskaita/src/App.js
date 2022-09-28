// import Button from "../../2_paskaita/src/components/Button/Button";
// import Hero from "./components/hero/Hero";
import Hero from "./components/web/Hero/Hero";
import Card from "./components/web/Card/Card";
import Button from "./components/web/Button/Button";
import "./App.css";

// const App = () => {
//   return (
//     <div className="container">
//       <Hero title={"Hello, how are you"} subtitle={"nice to meet you"} />
//       <p>Hello</p>
//       <Button text={"Press me!"} type="submit" />
//       <Button text={"Buy!"} type="submit" />
//       <div className="buttons">
//         <Button />
//         <Button bgColor="orange" />
//         <Button text="Submit" />
//         <Button />
//       </div>
//       <Hero color={"orange"} />
//       <Button text={"Register"} bgColor="hotpink" />
//       <Button hasIcon />
//     </div>
//   );
// };

const App = () => {
  return (
    <div>
      <Hero
        url={
          "https://images.pexels.com/photos/1292115/pexels-photo-1292115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      >
        <Button />
      </Hero>
      <div className="container">
        <div className="container-info">
          <h1>Portfolio</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            placeat autem, laborum ipsum repellat accusamus similique. Impedit
            reprehenderit, a minus, tempore voluptate, fugit molestiae mollitia
            quae dolor libero labore atque ut! Perspiciatis explicabo temporibus
            veritatis animi nam!
          </p>
        </div>
        <div className="cards-container">
          {[
            [
              "Greta Thunberg",
              "https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg",
            ],
            [
              "Tom Smith",
              "https://images.pexels.com/photos/2635534/pexels-photo-2635534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ],
            [
              "John Scena",
              "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ],
            [
              "Rebbeca Black",
              "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ],
            [
              "",
              "https://images.pexels.com/photos/1445527/pexels-photo-1445527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ],
            ["Kevin M", ""],
          ].map((user) => (
            <Card name={`${user[0]}`} url={`${user[1]}`} className={"card"} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
