import "./Add.css";
import Navigation from "../../components/Navigation/Navigation";
import Button from "../../components/Button/Button";
import { useState } from "react";

const Add = () => {
  const [peopleCount, setPeopleCount] = useState(0);
  const [price, setPrice] = useState(0);

  const handlerAddOrder = (e) => {
    e.preventDefault();
    if (peopleCount && price) {
      pushOrder({ people: peopleCount, price: price });
      setPeopleCount("");
      setPrice("");
    }
  };

  const pushOrder = (order) => {
    console.log(order);
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    };
    fetch("https://believed-shore-vanadium.glitch.me/", option)
      .then((res) => res.json())
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navigation />
      <div className="add-container">
        <form onSubmit={(e) => handlerAddOrder(e)}>
          <div>
            <label>Peoples</label>
            <input
              type="number"
              value={peopleCount}
              onChange={(e) => setPeopleCount(e.target.value)}
            />
          </div>
          <div>
            <label>Price</label>
            <input
              type="number"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <Button type={"submit"}>Add Order</Button>
        </form>
      </div>
    </div>
  );
};

export default Add;
