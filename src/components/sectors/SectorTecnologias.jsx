import "../../style/sectors/SectorTecnologias.css";
import { FaFigma } from "react-icons/fa6";
import { SiCanva, SiMiro, SiPython, SiReact, SiProgress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbBrandDjango, TbBrandReactNative } from "react-icons/tb";
import { IoLogoVue } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

const SectorTecnologias = () => (
  <div className="sectorTecnologias" id="sector-skills">
    <h2 className="titleTecnologias">
      Como eu <br />
      trabalho?
    </h2>
    <p className="textTecnologias">
      Linguagens, librarys, framework e prototipagem.
    </p>
    <div className="tecnologias">
      {/* FRONTEND */}
      <div className="frontendDiv">
        <h2 className="frontendTitle">Front-End</h2>
        <div className="iconsFrontend">
          <div className="tecnologiaItem">
            <div className="tecnologiaRow">
              <div className="vueIcon">
                <IoLogoVue />
                <span>Vue.js</span>
              </div>
            </div>
          </div>
          <div className="tecnologiaItem">
            <div className="tecnologiaRow">
              <div className="reactIcon">
                <SiReact />
                <span>React.js</span>
              </div>
            </div>
          </div>
          <div className="tecnologiaItem">
            <div className="tecnologiaRow">
              <div className="reactnativeIcon">
                <TbBrandReactNative />
                <span>React Native</span>
              </div>
            </div>
          </div>
          <div className="tecnologiaItem">
            <div className="tecnologiaRow">
              <div className="htmlIcon">
                <IoLogoHtml5 />
                <span>HTML5</span>
              </div>
            </div>
          </div>
          <div className="tecnologiaItem">
            <div className="tecnologiaRow">
              <div className="cssIcon">
                <FaCss3Alt />
                <span>CSS3</span>
              </div>
            </div>
          </div>
          <div className="tecnologiaItem">
            <div className="tecnologiaRow">
              <div className="javascriptIcon">
                <RiJavascriptFill />
                <span>JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="backendDiv">
        <h2 className="backendTitle">Back-End</h2>
        <div className="iconsBackend">
          <div className="tecnologiaItem">
            <div className="tecnologiaRow">
              <div className="mysqlIcon">
                <GrMysql />
                <span>MySQL</span>
              </div>
            </div>
          </div>
          <div className="tecnologiaItem">
            <div className="tecnologiaRow">
              <div className="djangoIcon">
                <TbBrandDjango />
                <span>Django</span>
              </div>
            </div>
          </div>
          <div className="tecnologiaItem">
            <div className="tecnologiaRow">
              <div className="pythonIcon">
                <SiPython />
                <span>Python</span>
              </div>
            </div>
          </div>
          <div className="tecnologiaItem">
            <div className="tecnologiaRow">
              <div className="progressIcon">
                <SiProgress />
                <span>Progress OpenEdge</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="prototipagemDiv">
        <h2 className="prototipagemTitle">Prototipagem</h2>
        <div className="iconsPrototipagem">
          <div className="tecnologiaItem">
            <div className="tecnologiaRow">
              <div className="figmaIcon">
                <FaFigma />
                <span>Figma</span>
              </div>
            </div>
          </div>
          <div className="tecnologiaItem">
            <div className="tecnologiaRow">
              <div className="canvaIcon">
                <SiCanva />
                <span>Canva</span>
              </div>
            </div>
          </div>
          <div className="tecnologiaItem">
            <div className="tecnologiaRow">
              <div className="miroIcon">
                <SiMiro />
                <span>Miro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SectorTecnologias;
