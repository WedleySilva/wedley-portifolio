import '../../style/sectors/SectorSobre.css';

const SectorSobre = () => (
    <sector className="sectorSobreMim">
        <h2 className="titleSobre">
        Um pouco mais sobre mim
        </h2>
        <h3 className="textSobre">
        Olá, meu nome é <strong className='bold'>Wedley Silva Schmoeller</strong>, tenho 19  anos de idade e <strong className='bold'>amo programação</strong>. 
        <div className="textSobre2">
        Sou apaixonado por <strong className='bold'>tecnologia</strong>, <strong className='bold'>softwares</strong> e <strong className='bold'>desenvolvimento</strong> de 
         soluções práticas, sendo assim programação é a minha área <strong className='bold'>profissional</strong> e meu <strong className='bold'>hobbie</strong>.
         </div>
        </h3>
        <div className='divImagemSobre'>
            <img  className="imagemSectorSobre" src="https://firebasestorage.googleapis.com/v0/b/wedley-portifolio.appspot.com/o/Fotos%2FWedley_Schmoeller.png?alt=media&token=0a20e424-158d-41bb-8f4e-ac23d399770e" alt="Wedley Silva Schmoeller" />
        </div>

    </sector>
);

export default SectorSobre;