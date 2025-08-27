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
          Sou formado em <strong className="bold">Informática para Internet</strong> e atualmente curso <strong className="bold">Engenharia de Software</strong>. 
          Tenho experiência no desenvolvimento de aplicativos e sistemas web, integração com APIs, criação 
          e gerenciamento de bancos de dados, realização de testes de software e manipulação de backends. 

        </span>
      </div>
      <div className="textSobre3">
        <span>
          Além disso, atuo na prototipagem e elaboração de soluções completas voltadas à engenharia de software.
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
