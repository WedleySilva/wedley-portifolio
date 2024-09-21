import "../../style/sectors/SectorTecnologias.css";
import { FaFigma } from "react-icons/fa6";
import { SiCanva, SiMiro, SiPython, SiReact } from "react-icons/si";
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
      <div className="frontendDiv">
        <h2 className="frontendTitle">Front-End</h2>
        <div className="iconsFrontend">
          <div className="tecnologiaItem">
            <div className="tecnologiaRow">
              <IoLogoVue className="vueIcon" />
              <span className="tecnologiaText">Vue.js</span>
            </div>
            <div className="vuePct">98%</div>
          </div>
          <div className="tecnologiaItem">
            <div className="tecnologiaRow">
              <SiReact className="reactIcon" />
              <span className="tecnologiaText">React.js</span>
            </div>
            <div className="reactPct">98%</div>
          </div>
          <div className="tecnologiaItem">
            <div className="tecnologiaRow">
              <TbBrandReactNative className="reactnativeIcon" />
              <span className="tecnologiaText">React Native</span>
            </div>
            <div className="reactnativePct">90%</div>
          </div>
          <div className="tecnologiaItem">
            <div className="tecnologiaRow">
              <IoLogoHtml5 className="htmlIcon" />
              <span className="tecnologiaText">HTML5</span>
            </div>
            <div className="htmlPct">100%</div>
          </div>
          <div className="tecnologiaItem">
            <div className="tecnologiaRow">
              <FaCss3Alt className="cssIcon" />
              <span className="tecnologiaText">CSS3</span>
            </div>
            <div className="cssPct">100%</div>
          </div>
          <div className="tecnologiaItem">
            <div className="tecnologiaRow">
              <RiJavascriptFill className="javascriptIcon" />
              <span className="tecnologiaText">JavaScript</span>
            </div>
            <div className="javascriptPct">100%</div>
          </div>
        </div>
      </div>
      <div className="backendDiv">
        <h2 className="backendTitle">Back-End</h2>
        <div className="iconsBackend">
          <div className="tecnologiaItem">
            <div className="tecnologiaRow">
              <GrMysql className="mysqlIcon" />
              <span className="tecnologiaText">MySQL</span>
            </div>
            <div className="mysqlPct">95%</div>
          </div>
          <div className="tecnologiaItem">
            <div className="tecnologiaRow">
              <TbBrandDjango className="djangoIcon" />
              <span className="tecnologiaText">Django</span>
            </div>
            <div className="djangoPct">80%</div>
          </div>
          <div className="tecnologiaItem">
            <div className="tecnologiaRow">
              <SiPython className="pythonIcon" />
              <span className="tecnologiaText">Python</span>
            </div>
            <div className="pythonPct">90%</div>
          </div>
        </div>
      </div>
      <div className="prototipagemDiv">
        <h2 className="prototipagemTitle">Prototipagem</h2>
        <div className="iconsPrototipagem">
          <div className="tecnologiaItem">
            <div className="tecnologiaRow">
              <FaFigma className="figmaIcon" />
              <span className="tecnologiaText">Figma</span>
            </div>
            <div className="figmaPct">90%</div> 
          </div>
          <div className="tecnologiaItem">
            <div className="tecnologiaRow">
              <SiCanva className="canvaIcon" />
              <span className="tecnologiaText">Canva</span>
            </div>
            <div className="canvaPct">95%</div>
          </div>
          <div className="tecnologiaItem">
            <div className="tecnologiaRow">
              <SiMiro className="miroIcon" />
              <span className="tecnologiaText">Miro</span>
            </div>
            <div className="miroPct">80%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SectorTecnologias;
