import "../style/MainComp.css";
import SectorSobre from './sectors/SectorSobre';
import SectorSkills from './sectors/SectorSkills';

function MainComp() {
  return (
    <main className="mainComp">
      <SectorSobre />
      <SectorSkills />
    </main>
  );
}

export default MainComp;
