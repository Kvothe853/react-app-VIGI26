const PetData = (props) => {
  const str = `/Date(${props.date})/`;
  const num = parseInt(str.replace(/[^0-9]/g, ""));
  const date = new Date(num);

  const month = date.toLocaleString("en-US", { month: "2-digit" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div>
      {year}-{month}-{day}
    </div>
  );
};

export default PetData;
