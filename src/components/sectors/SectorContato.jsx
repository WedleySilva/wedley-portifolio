import { useState } from "react";
import "../../style/sectors/SectorContato.css";
import { FiSend } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SectorContato = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleFormSubmit = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <section className="sectorContato" id="sector-contato">
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
            <a
              href="https://github.com/wedleysilva"
              className="githubIconContato"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/wedley-silva-schmoeller-809104247/"
              className="linkedinIconContato"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:wedleysilva21052gmail.com"
              className="mailIconContato"
            >
              <MdEmail />
            </a>
          </div>
          <div className="infoContato">
            <div className="contatoLocal">
              <GrLocation /> Joinville - SC, Brasil
            </div>
            <div className="contatoPhone">
              <BsTelephone /> (47) 99673-1463
            </div>
          </div>
        </div>
      </div>

      <form
        action="https://formsubmit.co/wedleysilva2105@gmail.com"
        method="POST"
        className="contatoForm"
        onSubmit={handleFormSubmit}
      >
        <input type="hidden" name="accessKey" value="YOUR_ACCESS_KEY" />
        <div className="nomeEmpresaDiv">
          <input
            type="text"
            name="name"
            id="nome"
            className="nomeContato"
            placeholder="Nome/Empresa: "
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            className="emailContato"
            placeholder="E-mail: "
            required
          />
        </div>

        <div className="mensagemDiv">
        <textarea
          name="message"
          id="mensagem"
          className="mensagemContato"
          placeholder="Mensagem: "
          required
        ></textarea>
        </div>

        <div className="sendButtonRow">
          <button type="submit" className="sendButton">
            <FiSend className="sendIcon" /> Enviar
          </button>
        </div>
      </form>

      {modalVisible && (
        <div className="modal">
          <div className="modalContent">
            <span className="closeButton" onClick={closeModal}>
              &times;
            </span>
            <h2>Mensagem Enviada!</h2>
            <p>Obrigado por entrar em contato. Responderei em breve!</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default SectorContato;
