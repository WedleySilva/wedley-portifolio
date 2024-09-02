import "../style/MainComp.css";
import SectorSobre from './sectors/SectorSobre';
import SectorSkills from './sectors/SectorSkills';
import SectorTecnologias from './sectors/SectorTecnologias';

function MainComp() {
  return (
    <main className="mainComp">
      <SectorSobre />
      <SectorSkills />
      <SectorTecnologias />
    </main>
  );
}

export default MainComp;
