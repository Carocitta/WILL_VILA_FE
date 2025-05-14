
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-12 d-flex justify-content-end align-items-center">
            <div className="about-box p-5">
              <h1 className="about-title mb-4">WILL VILA</h1>
              <p className="about-text">
                Soy Will Villa, filmmaker apasionado por la música extrema y
                especializado en la creación de videoclips para bandas de metal,
                hardcore, punk rock y todos sus matices. Nací y crecí en Sant
                Just Desvern (Barcelona) y mi vínculo con la música va mucho más
                allá de la cámara: también soy batería. Actualmente toco en
                Bellvitge, y anteriormente formé parte de Clouds Over Normandy,
                Boïra y Ultrablue. Desde siempre he sentido una conexión
                profunda con el sonido, la energía y la identidad visual que
                define a cada banda. En 2023 comencé mi trayectoria como
                director y realizador audiovisual, uniendo mi formación
                académica con mi experiencia sobre los escenarios para crear
                vídeos auténticos, potentes y fieles a la esencia de cada
                proyecto musical.
                <br />
                <br />
                Mi objetivo es ayudarte a contar tu historia con imágenes que
                suenen tan fuerte como tu música.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
