import { useState, useEffect } from "react";
import "./App.css";
import Hero from "./components/hero/hero";
import User from "./components/users/users";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
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

  console.log(data);
  return (
    <div>
      <Hero />
      <main>
        <Hero
          height={"200px"}
          heroUrl={
            "https://images.pexels.com/photos/1539225/pexels-photo-1539225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          title={"Goodbye my lover"}
          subtitle={"Sad face..."}
        />

        <section className="sidenav-section">
          <div className="sidenav">Hello</div>
          <div className="users">
            <h1>Users</h1>
            <div className="users-container">
              {error && (
                <div>{`Tgere us a problem fetching the post data - ${error}`}</div>
              )}
              {loading && <div>Loading...</div>}
              {data &&
                data.map(({ name, email }) => (
                  <User
                    name={name}
                    email={email}
                    url={`https://picsum.photos/200/300?random=${Math.floor(
                      Math.random * 10
                    )}`}
                  />
                ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
