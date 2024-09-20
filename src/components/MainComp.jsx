import "../style/MainComp.css";
import SectorSobre from './sectors/SectorSobre';
import SectorSkills from './sectors/SectorSkills';
import SectorTecnologias from './sectors/SectorTecnologias';
import SectorProjetos from './sectors/SectorProjetos';
import SectorContato from './sectors/SectorContato';

function MainComp() {
  return (
    <main className="mainComp">
      <SectorSobre />
      <SectorSkills />
      <SectorTecnologias />
      <SectorProjetos />
      <SectorContato />
    </main>
  );
}

export default MainComp;
