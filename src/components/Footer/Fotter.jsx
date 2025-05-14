import "bootstrap/dist/css/bootstrap.min.css";
import "./Fotter.css";

function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <p className="footer-text">
              © 2025 Will Vila Web. Todos los derechos reservados.
              <br />
              Las imágenes utilizadas en esta web, incluidos retratos y
              fotografías artísticas, son propiedad de @willvila y
              @arnaurectoret, y están protegidas por derechos de autor.
              <br />
              Los videos y la producción audiovisual han sido realizados por
              @willvila.
              <br />
              El diseño y desarrollo visual de la web ha sido realizado por
              @carocittart.
              <br />
              Queda prohibida la reproducción, distribución o uso no autorizado
              de cualquier contenido presente en esta web sin el consentimiento
              expreso de los autores.
            </p>
          </div>

          <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end align-items-center gap-3">
            <a
              href="https://www.instagram.com/will.vila/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ir al perfil de Instagram de Will Vila"
            >
              <img
                src="/img/instagram.png"
                alt="Icono de Instagram - Will Vila"
                className="footer-icon"
              />
            </a>
            <a
              href="https://www.youtube.com/@willvilabcn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ir al canal de YouTube de Will Vila"
            >
              <img
                src="/img/youtube.png"
                alt="Icono de YouTube - Will Vila"
                className="footer-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
