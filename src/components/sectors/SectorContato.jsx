import "../../style/sectors/SectorContato.css";
import { FiSend } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SectorContato = () => (
  <section className="sectorContato">
    <div className="contatotextDiv">
      <h1 className="contatoTitle">Entre em contato</h1>
      <p className="contatoSubtitle">Ficou interessado? Vamos conversar!</p>
    </div>
    <div className="contatoBox">
      <img
        className="contatoImg"
        src="https://firebasestorage.googleapis.com/v0/b/wedley-portifolio.appspot.com/o/Fotos%2FWedley_sem_fundo.png?alt=media&token=b1c4d32c-bbcc-4a24-b178-af15b6395920"
        alt="Wedley S. Schmoeller"
      />
      <div className="contatoText">
        <p className="boxTitle">Tem algo para compartilhar?</p>
        <p className="boxsubtitle">Entre em contato comigo!</p>
        <div className="contatoIcons">
          <a href="https://github.com/wedleysilva" className="githubIconContato" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/wedley-silva-schmoeller-809104247/" className="linkedinIconContato" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:wedleysilva21052gmail.com" className="mailIconContato">
            <MdEmail />
          </a>
        </div>
        <div className="infoContato">
          <div className="contatoLocal">
            <GrLocation /> Garuva - SC, Brasil
          </div>
          <div className="contatoPhone">
            <BsTelephone /> (47) 99673-1463
          </div>
        </div>
      </div>
    </div>
    <div className="contatoForm">
        <div className="nomeEmpresaDiv">
        <textarea
        id="nome"
        htmlFor="nome"
        className="nomeContato"
        placeholder="Nome/Empresa: "
      ></textarea>
      <textarea
        name="email"
        id="email"
        className="emailContato"
        placeholder="E-mail: "
      ></textarea>
        </div>
      
      <textarea
        name="mensagem"
        id="mensagem"
        className="mensagemContato"
        placeholder="Mensagem: "
      ></textarea>
      <div className="sendButtonRow">
      <p className="sendButton">
        <FiSend className="sendIcon" /> Enviar
      </p>
      </div>
    </div>
  </section>
);

export default SectorContato;
