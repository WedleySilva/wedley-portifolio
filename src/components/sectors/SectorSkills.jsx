import React, { useState } from "react";
import "../../style/sectors/SectorSkills.css";
import { IoIosArrowUp } from "react-icons/io";
import { TbDownload } from "react-icons/tb";

const SectorSkills = () => {
  const [isExpOpen, setIsExpOpen] = useState(false);
  const [isHardOpen, setIsHardOpen] = useState(false);
  const [isSoftOpen, setIsSoftOpen] = useState(false);

  const toggleExp = () => setIsExpOpen(!isExpOpen);
  const toggleHard = () => setIsHardOpen(!isHardOpen);
  const toggleSoft = () => setIsSoftOpen(!isSoftOpen);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "https://firebasestorage.googleapis.com/v0/b/wedley-portifolio.appspot.com/o/PDF%2FDev_Wedley_CV.pdf?alt=media&token=e9d4afb1-01c0-493a-ab96-09cd26543510"; 
    link.download = "wedley-cv.pdf"; 
    link.click();
  };

  return (
    <div className="sectorSkills">
      <div className="divSkills">
        <div className="expSkills" onClick={toggleExp}>
          Formação Acadêmica{" "}
          <IoIosArrowUp className={`arrowIcon ${isExpOpen ? "open" : ""}`} />
        </div>
        <div className={`expContent boxContent ${isExpOpen ? "open" : ""}`}>
          <p className="boxPskills">- Engenharia de Software:</p>
          <p>- 2024 ~ 2027;</p>
          <p className="boxPskills">- Técnico em Informática para Internet:</p>
          <p>- 2021 ~ 2023;</p>
        </div>

        <div className="hardSkills" onClick={toggleHard}>
          Hard Skills{" "}
          <IoIosArrowUp className={`arrowIcon ${isHardOpen ? "open" : ""}`} />
        </div>
        <div className={`hardContent boxContent ${isHardOpen ? "open" : ""}`}>
          <p className="boxPskills">- Desenvolvimento Web:</p>
          <p>- React.js, Vue.js + Vite, Bootstrap e JavaScript;</p>
          <p className="boxPskills">- Aplicações para Dispositivos Móveis:</p>
          <p>- React Native e JavaScript;</p>
          <p className="boxPskills">- Desenvolvimento Back-End:</p>
          <p>- Django, MySql e Python;</p>
          <p className="boxPskills">- Ferramentas:</p>
          <p>- GitHub, VsCode, Node.js, Axios, NPM e JSON;</p>
        </div>

        <div className="softSkills" onClick={toggleSoft}>
          Soft Skills{" "}
          <IoIosArrowUp className={`arrowIcon ${isSoftOpen ? "open" : ""}`} />
        </div>
        <div className={`softContent boxContent ${isSoftOpen ? "open" : ""}`}>
          <p className="boxPskills">- Ótima comunicação, interesse e adaptabilidade;</p>
          <p>- Trabalho em equipe e resolução de conflitos;</p>
          <p className="boxPskills">- Pensamento criativo e adoro um desafio;</p>
        </div>

        <div className="cvComp">
          <div className="cvButton" onClick={handleDownload}>
            <TbDownload className="downloadIcon" /> Baixar CV
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorSkills;
