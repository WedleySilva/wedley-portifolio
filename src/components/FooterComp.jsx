  import '../style/FooterComp.css';
  import { FaGithub, FaLinkedin } from "react-icons/fa";
  import { MdEmail } from "react-icons/md";

  const Footer = () => (
  <footer className='footerComp'>
    <h1 className="h1Footer">
        Wedley
      </h1>
      <div className="textFooter">
        Full Stack Developer
      </div>
      <div className="iconsFooter">
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
      <div className="text2Footer">
      © Wedley S. Schmoeller. <br />Todos os direitos reservados.
      </div>
  </footer>
  );
    
    export default Footer;
    