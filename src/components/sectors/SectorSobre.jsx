import '../../style/sectors/SectorSobre.css';

const SectorSobre = () => (
    <section id="sector-sobre" className="sectorSobreMim">
        <h2 className="titleSobre">
        Um pouco mais <br /> sobre mim
        </h2>
        <h3 className="textSobre">
        Olá, meu nome é <strong className='bold'>Wedley Silva Schmoeller</strong> e tenho 19  anos de idade.
        <div className="textSobre2">
        Sou apaixonado por tecnologia, desenvolvimento de softwares e planejamento de soluções práticas para os mais diversos tipos de desafios. 
        </div>
        <div className="textSobre3">
        Sendo assim, projetar e desenvolver softwares é o meu principal objetivo de carreira profissional.
        </div>
        </h3>
        <div className='divImagemSobre'>
            <img  className="imagemSectorSobre" src="https://firebasestorage.googleapis.com/v0/b/wedley-portifolio.appspot.com/o/Fotos%2FWedley_Schmoeller.png?alt=media&token=0a20e424-158d-41bb-8f4e-ac23d399770e" alt="Wedley Silva Schmoeller" />
        </div>
    </section>
);

export default SectorSobre;
