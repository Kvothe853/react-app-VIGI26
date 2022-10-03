import "./CustomButton.css";

const CustomButton = (props) => {
  //   if (props.variant === "contained") {
  //     return (
  //       <button className="custom-button custom-contained">Contained</button>
  //     );
  //   } else {
  //     return <button className="custom-button custom-outlined">Outlined</button>;
  //   }
  return (
    <button
      className={`custom-button ${
        props.variant === "contained" ? "custom-contained" : "custom-outlined"
      }`}
    >
      {props.children}
    </button>
  );
};

export default CustomButton;
