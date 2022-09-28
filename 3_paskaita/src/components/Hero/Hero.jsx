import "./Hero.css";

const Hero = (props) => {
  return (
    <div
      className="hero-wrapper"
      style={{ backgroundColor: props.color || "cornflowerblue" }}
    >
      {props.title && (
        <h1 className="hero-title">{props.title || "Info hero"}</h1>
      )}
      {props.subtitle && (
        <h2 className="hero-subtitle">{props.subtitle || "Info subtitle"}</h2>
      )}
      <button>{props.children}</button>
    </div>
  );
};

export default Hero;

{
  /* <div className=`${props.color}`>
  <button>Register</button>  
</div> */
}

// ---

// const herClassName = () => {
//   switch (color) {
//     case "blue":
//       return "blue-hero";
//     case "red":
//       return "red-hero";
//     default:
//       return "";
//   }
// };

// <div className={herClassName()}></div>;

// ---
