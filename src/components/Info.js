import profil from "../assets/mauricelionelndiongmo.jpg";
import {
  FaFontAwesome,
  FaLinkedin,
  FaLinkedinIn,
  FaMailBulk,
} from "react-icons/fa";
function Info() {
  return (
    <div className="Info">
      <img src={profil} className="App-logo" alt="logo" />
      <h2>Ndiongmo</h2>
      <h2>Maurice Lionel</h2>
      <h4>Senior Fullstack Developer</h4>
      <a href="https://www.pasoenco.com">
        <h6>Pan-African Software Engineering Company</h6>
      </a>
      <div className="Button">
        <button>
          <a href="mailto:contact@pasoenco.com">
            <FaMailBulk /> Email
          </a>
        </button>
        <button className="button-lkdin">
          <a href="https://cm.linkedin.com/in/maurice-lionel-ndiongmo">
            <FaLinkedin style={{ color: "white" }} />
            &nbsp;Linkedin
          </a>
        </button>
      </div>
    </div>
  );
}
export default Info;
