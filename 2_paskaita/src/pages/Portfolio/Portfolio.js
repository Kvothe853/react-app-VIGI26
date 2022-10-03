import "./Portfolio.css";
import Hero from "../components/Hero/Hero";
import CustomButton from "../components/CustomButton/CustomButton";

const Portfolio = (props) => {
  const portfolioItems = [
    { imageUrl: "adasdasdasd", text: "Pirmas Item" },
    { imageUrl: "sdadadadssa", text: "Asdasdasd" },
    { imageUrl: "sdadadadssa", text: "Asdasdasd" },
    { imageUrl: "sdadadadssa", text: "Asdasdasd" },
    { imageUrl: "sdadadadssa", text: "Asdasdasd" },
  ];
  return (
    <div>
      <Hero title={"title"} subtitle={"Some about text in two lines"}>
        <CustomButton>Airidas</CustomButton>
      </Hero>
    </div>
  );
};

export default Portfolio;
