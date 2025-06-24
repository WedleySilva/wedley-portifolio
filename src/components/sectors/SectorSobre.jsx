import "../../style/sectors/SectorSobre.css";

const SectorSobre = () => (
  <section id="sector-sobre" className="sectorSobreMim">
    <h2 className="titleSobre">
      Um pouco mais <br /> sobre mim
    </h2>
    <h3 className="textSobre">
      Olá mundo, me chamo{" "}
      <strong className="bold">Wedley Silva Schmoeller</strong>, tenho 20 anos
      de idade e sou desenvolvedor Full Stack.
      <div className="textSobre2">
        <span>
          Tenho uma paixão imensa por tecnologia e desenvolvimento de software,
          abrangendo desde o planejamento de soluções práticas e eficientes até
          a experiencia do usúario.
        </span>
      </div>
      <div className="textSobre3">
        <span>
          Sendo assim, projetar e desenvolver softwares é o meu ponto forte.
        </span>
      </div>
    </h3>
    <div className="divImagemSobre">
      <img
        className="imagemSectorSobre"
        src="https://firebasestorage.googleapis.com/v0/b/wedley-portifolio.appspot.com/o/Fotos%2FWedley_Schmoeller.png?alt=media&token=0a20e424-158d-41bb-8f4e-ac23d399770e"
        alt="Wedley Silva Schmoeller"
      />
    </div>
  </section>
);

export default SectorSobre;
