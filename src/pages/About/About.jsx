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
                De la escena para la escena, con la idea de unir la pasión por
                la música y la filmografía.
                <br />
                <br />
                Tras toda una vida relacionado con la música a través de
                las diferentes bandas en las que estuve como batería,
                consumiendo proyectos como Audiotree o los directos de Sunny
                Singh en hate5six, la idea de crear contenido audiovisual de
                calidad para las bandas emergentes del país nació de esa pasión
                por el arte audiovisual y el deseo de ver a mis grupos favoritos
                crecer en una industria que cada vez ofrece menos
                oportunidades.
                
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
