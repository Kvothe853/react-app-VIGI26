import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import { RotatingLines } from "react-loader-spinner";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://golden-whispering-show.glitch.me/")
      .then((resp) => resp.json())
      .then((response) => {
        setProducts(response);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDeleteProduct = (productId) => {
    console.log(productId);
    setProducts((prevProducts) =>
      prevProducts.filter((prevProduct) => prevProduct.id !== productId)
    );
  };

  return (
    <div className="cards-container">
      {loading && (
        <div>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="42"
            visible={true}
          />
        </div>
      )}
      {products.map((item) => (
        // <div key={item.id} onClick={() => handleDeleteProduct(item.id)}>
        <div key={item.id}>
          <Card
            imageUrl={item.image}
            text={item.title}
            price={item.price}
            deleteProduct={() => handleDeleteProduct(item.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
