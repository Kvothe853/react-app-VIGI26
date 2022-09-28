import "./Avatar.css";

const Avatar = (props) => {
  const letters = props.children.substring(0, 2).toUpperCase();
  const randomColourGenerator = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
  };
  return (
    <div
      className="avatar"
      style={{ backgroundColor: props.bgColor || randomColourGenerator() }}
    >
      {letters}
    </div>
  );
};

export default Avatar;
