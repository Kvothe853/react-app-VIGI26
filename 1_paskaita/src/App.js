import "./App.css";

// JSX struktura, kuri renderina Javascript + HTML

function double(number) {
  return number * number;
}

function App() {
  return (
    <div>
      <header>
        <nav>
          <a href="#home">Home</a>
          <a href="#product">Product</a>
          <a href="#company">Company</a>
          <a href="#company">Contact</a>
        </nav>
      </header>
      <main>
        <section className="hero-image"></section>
        <section className="test">
          <div>
            <h2>About</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum et
              maxime autem voluptates voluptatem quisquam consectetur,
              recusandae deleniti est laudantium totam dolor ducimus quasi
              beatae?
            </p>
          </div>
          <div>
            <h2>Company</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum et
              maxime autem voluptates voluptatem quisquam consectetur,
              recusandae deleniti est laudantium totam dolor ducimus quasi
              beatae?
            </p>
          </div>
          <div>
            <h2>Services</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum et
              maxime autem voluptates voluptatem quisquam consectetur,
              recusandae deleniti est laudantium totam dolor ducimus quasi
              beatae?
            </p>
          </div>
        </section>
        <section className="test2">
          <div className="left-info">
            <div>
              <h2>Content</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                dolorum laudantium, voluptatem cupiditate maxime, dolores qui
                sequi sunt temporibus minima quasi velit corrupti! Placeat quam
                pariatur numquam officiis, repellat laborum, nihil doloremque
                amet delectus quod tenetur deserunt modi et exercitationem.
              </p>
            </div>
            <div>
              <h3>Sub Header</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                dolorum laudantium, voluptatem cupiditate maxime, dolores qui
                sequi sunt temporibus minima quasi velit corrupti! Placeat quam
                pariatur numquam officiis, repellat laborum, nihil doloremque
                amet delectus quod tenetur deserunt modi et exercitationem.
              </p>
            </div>
          </div>
          <div className="right-nav">
            <h3>Navigation</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#product">Product</a>
              </li>
              <li>
                <a href="#company">Company</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
