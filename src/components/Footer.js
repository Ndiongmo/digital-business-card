import {
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FontAwesome,
} from "react-icons/fa";
function Footer() {
  return (
    <footer>
      <button>
        <a href="https://twitter.com/mauricendiongmo">
          <FaTwitter />
        </a>
      </button>
      <button>
        <a href="https://www.facebook.com/pasoenco">
          <FaFacebookF />
        </a>
      </button>
      <button>
        <FaInstagram />
      </button>
      <button>
        <a href="https://github.com/Ndiongmo">
          <FaGithub />
        </a>
      </button>
    </footer>
  );
}
export default Footer;
