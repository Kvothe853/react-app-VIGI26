const Bar = (props) => {
  const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
  };
  return (
    <div
      className="bar-box"
      style={{
        width: props.width,
        backgroundColor: randomColor(),
        transition: `all 0.2s ease-in`,
      }}
    ></div>
  );
};

export default Bar;
