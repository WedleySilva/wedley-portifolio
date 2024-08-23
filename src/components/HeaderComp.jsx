import '../style/HeaderComp.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => (
  <header>
    <div className="text1Header">
      Olá, eu sou
    </div>
    <h1 className="h1Header">
      Wedley
    </h1>
    <div className="text2Header">
      Full Stack Developer
    </div>
    <div className="iconsHeader">
      <a href="https://github.com/wedleysilva" className="githubIcon" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/wedley-silva-schmoeller-809104247/" className="linkedinIcon" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="mailto:wedleysilva21052gmail.com" className="mailIcon">
        <MdEmail />
      </a>
    </div>
  </header>
);

export default Header;
