import { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://golden-whispering-show.glitch.me/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((err) => {
        setError(err);
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <div className="products-container">
        {loading && <div>Loading...</div>}
        {data &&
          data.map(({ id, title, image, price }) => (
            <Card id={id} title={title} url={image} price={price} />
          ))}
      </div>
    </div>
  );
}

export default App;
