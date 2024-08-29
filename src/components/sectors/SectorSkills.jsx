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

  return (
    <div className="sectorSkills">
      <div className="divSkills">
        <div className="expSkills" onClick={toggleExp}>
          Experiência{" "}
          <IoIosArrowUp className={`arrowIcon ${isExpOpen ? "open" : ""}`} />
        </div>
        {isExpOpen && (
          <div className="expContent boxContent">
            <p>- 4,5 anos de estudo na programação;</p>
            <p>- Cursando Engenharia de Software;</p>
            <p>- Curso Técnico em desenvolvimento de Software;</p>
          </div>
        )}

        <div className="hardSkills" onClick={toggleHard}>
          Hard Skills{" "}
          <IoIosArrowUp className={`arrowIcon ${isHardOpen ? "open" : ""}`} />
        </div>
        {isHardOpen && (
          <div className="hardContent boxContent">
            <p>- Prototipagem de telas e modelagem de dados;</p>
            <p>- Desenvolvimento Full Stack;</p>
            <p>- Aplicações para dispositivos móveis e web.</p>
          </div>
        )}

        <div className="softSkills" onClick={toggleSoft}>
          Soft Skills
          <IoIosArrowUp className={`arrowIcon ${isSoftOpen ? "open" : ""}`} />
        </div>
        {isSoftOpen && (
          <div className="softContent boxContent">
            <p>- Ótima comunicação, interesse e adaptabilidade;</p>
            <p>- Trabalho em equipe e resolução de conflitos;</p>
            <p>- Pensamento criativo e adoro um desafio;</p>
          </div>
        )}

        {/* Botão para download de CV */}
        <div className="cvComp">
          <div className="cvButton">
            <TbDownload className="downloadIcon" /> Baixar CV
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorSkills;
