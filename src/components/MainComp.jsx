import "../style/MainComp.css";
import FixedHeader from "./sectors/FixedHeader";
import SectorSobre from './sectors/SectorSobre';
import SectorSkills from './sectors/SectorSkills';
import SectorTecnologias from './sectors/SectorTecnologias';
import SectorProjetos from './sectors/SectorProjetos';
import SectorContato from './sectors/SectorContato';

function MainComp() {
  return (
    <main className="mainComp">
      <FixedHeader />
      <SectorSobre />
      <SectorSkills />
      <SectorTecnologias />
      <SectorProjetos />
      <SectorContato />
    </main>
  );
}

export default MainComp;
