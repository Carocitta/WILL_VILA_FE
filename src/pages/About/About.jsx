import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <div className="container-fluid h-100">
        <div className="row h-100 d-flex justify-content-center align-items-stretch">
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-stretch mb-4 mb-lg-0">
            <div className="about-box p-3 w-100 d-flex justify-content-center align-items-center">
              <img
                src="/img/will_about_perfil.jpg"
                className="about-image img-fluid rounded"
                alt="Will Vila"
              />
            </div>
          </div>

          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-stretch">
            <div className="about-box p-5 w-100 d-flex flex-column justify-content-center">
              <h1 className="about-title mb-4">WILL VILA</h1>
              <p className="about-text">
                Soy Will Villa, filmmaker apasionado por la música extrema y
                especializado en la creación de videoclips para bandas de metal,
                hardcore, punk rock y todos sus matices. Nací y crecí en Sant
                Just Desvern (Barcelona) y mi vínculo con la música va mucho más
                allá de la cámara: también soy batería.
                <br />
                <br />
                Actualmente toco en Bellvitge, y anteriormente formé parte de
                Clouds Over Normandy, Boïra y Ultrablue. Desde siempre he
                sentido una conexión profunda con el sonido, la energía y la
                identidad visual que define a cada banda. En 2023 comencé mi
                trayectoria como director y realizador audiovisual, uniendo mi
                formación académica con mi experiencia sobre los escenarios para
                crear vídeos auténticos, potentes y fieles a la esencia de cada
                proyecto musical.
                <br />
                <br />
                Mi objetivo es ayudarte a contar tu historia con imágenes que
                suenen tan fuerte como tu música.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <div className="carousel-strip">
              <div className="carousel-strip-track">
                <img
                  src="/img/will_carrusel1.jpg"
                  alt="Slide 1"
                  className="carousel-strip-image rounded"
                />
                <img
                  src="/img/will_carrusel2.jpg"
                  alt="Slide 2"
                  className="carousel-strip-image rounded"
                />
                <img
                  src="/img/will_carrusel3.jpg"
                  alt="Slide 3 repeat"
                  className="carousel-strip-image rounded"
                />
                <img
                  src="/img/will_carrusel4.jpg"
                  alt="Slide 4 repeat"
                  className="carousel-strip-image rounded"
                />
                <img
                  src="/img/will_carrusel1.jpg"
                  alt="Slide 1 repeat"
                  className="carousel-strip-image rounded"
                />
                <img
                  src="/img/will_carrusel2.jpg"
                  alt="Slide 2 repeat"
                  className="carousel-strip-image rounded"
                />
                <img
                  src="/img/will_carrusel3.jpg"
                  alt="Slide 3 repeat"
                  className="carousel-strip-image rounded"
                />
                <img
                  src="/img/will_carrusel4.jpg"
                  alt="Slide 4 repeat"
                  className="carousel-strip-image rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
