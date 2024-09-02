import '../../style/sectors/SectorSobre.css';

const SectorSobre = () => (
    <sector className="sectorSobreMim">
        <h2 className="titleSobre">
        Um pouco mais sobre mim
        </h2>
        <h3 className="textSobre">
        Olá, eu me chamo <strong className='bold'>Wedley</strong>, tenho 19  anos de idade e <strong className='bold'>amo programação</strong>. 
        <div className="textSobre2">
        Sou apaixonado por <strong className='bold'>tecnologia</strong>, <strong className='bold'>softwares</strong> e <strong className='bold'>desenvolvimento</strong> de 
         soluções práticas, sendo assim programação é a minha área <strong className='bold'>profissional</strong> e meu <strong className='bold'>hobbie</strong>.
         </div>
        </h3>
        <div className='divImagemSobre'>
            <img  className="imagemSectorSobre" src="https://images.pexels.com/photos/10692904/pexels-photo-10692904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Wedley Silva Schmoeller" />
        </div>

    </sector>
);

export default SectorSobre;