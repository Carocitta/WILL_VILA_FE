import Button from "../../components/Button/Button";
import "./Home.css";

function Home() {
  return (
    <main className="home-background">
      <div className="home-center">
        <h1 className="home-title">WILL VILA</h1>
        <div className="home-image-container">
          <img
            src="/img/enfoque_grey.png"
            alt="Enfoque"
            className="home-image"
          />
        </div>
        <Button
          type="button"
          className="custom-button"
          text="Portfolio"
          to="/portfolio"
        />
      </div>
    </main>
  );
}

export default Home;
