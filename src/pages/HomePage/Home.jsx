import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import "./Home.css";

function Home() {
  return (
    <>
      <Header />

      <div className="home-background">
        <div className="home-content">
          <Button
            type="button"
            className="custom-button btn-lg"
            text="Portfolio"
            to="/portfolio"
          />
        </div>
      </div>
    
    </>
  );
}

export default Home;
