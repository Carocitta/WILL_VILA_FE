import Button from "../../components/Button/Button";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home-background">
        <div className="home-center">
          <div className="home-image-container">
            <h1 className="home-title">WILL VILA</h1>
            <img
              src="/img/enfoque_grey.png"
              alt="Enfoque"
              className="home-image"
            />
          </div>
          <Button
            type="button"
            className="custom-button "
            text="Portfolio"
            to="/portfolio"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
