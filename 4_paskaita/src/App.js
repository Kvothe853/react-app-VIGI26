import { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";
import { TailSpin } from "react-loader-spinner";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  const updateData = (e) => {
    e.preventDefault();
    const id = data.length + 1;
    if (imageUrl && title && price) {
      const newPrice = +price;
      data.push({ id, image: imageUrl, title, price: newPrice });

      loading && <div>Loading...</div>;
      data && displayData();
    }
    setImageUrl("");
    setTitle("");
    setPrice("");
  };

  // const handleDelete = (e) => {
  //   const text =
  //     e.target.previousElementSibling.previousElementSibling.textContent;
  //   setData((prevData) => prevData.filter((product) => product.title !== text));
  //   displayData();
  // };

  const handleDelete = (itemId) => {
    setData((prevData) => prevData.filter((product) => product.id !== itemId));
    displayData();
  };

  const displayData = () => {
    return data.map(({ id, title, image, price }) => (
      <Card
        id={id}
        title={title}
        url={image}
        price={price}
        func={() => handleDelete(id)}
      />
    ));
  };

  // const displayData = () => {
  //   return data.map(({ id, title, image, price }) => (
  //     <div key={`${title}_${id}`}>
  //       <Card
  //         id={id}
  //         title={title}
  //         url={image}
  //         price={price}
  //         func={() => handleDelete(id)}
  //       />
  //     </div>
  //   ));
  // };

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
      .then((data) => {
        setData(data);
      })
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
      <h1>Add New Product</h1>
      <div className="add-product-container">
        <form>
          <div>
            <label>Image Url</label>
            <input
              type="text"
              name="image"
              className="image-input"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <div>
            <label>Titlte</label>
            <input
              type="text"
              name="title"
              className="title-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Price</label>
            <input
              type="number"
              name="price"
              className="price-input"
              step=".01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button onClick={(e) => updateData(e)}>Add</button>
        </form>
      </div>
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <h1>Products</h1>
      <div className="products-container">
        {loading && (
          <div>
            <TailSpin
              height="40"
              width="40"
              color="#ddd"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        )}
        {data && displayData()}
      </div>
    </div>
  );
}

export default App;
