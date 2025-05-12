import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./Button.css";

function Button({ text, to, type = "button", className = "" }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    }
  };

  return (
    <button
      type={type}
      className={`custom-button ${className}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
