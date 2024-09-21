import { useState, useEffect } from 'react';
import "../../style/sectors/FixedHeader.css";

const FixedHeader = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isVisible, setIsVisible] = useState(false); 
    const [isScrolling, setIsScrolling] = useState(false); 

    useEffect(() => {
        let scrollTimeout;

        const handleScroll = () => {
            const sectorSobre = document.getElementById('sector-sobre');
            
            if (sectorSobre) {
                const triggerPoint = sectorSobre.offsetTop;

                if (window.scrollY >= triggerPoint) {
                    setIsSticky(true);  
                } else {
                    setIsSticky(false); 
                }
            }

            setIsVisible(true);
            setIsScrolling(true); 


            clearTimeout(scrollTimeout);


            scrollTimeout = setTimeout(() => {
                setIsScrolling(false); 
                setIsVisible(false); 
            }, 2000);
        };

        const handleMouseMove = (e) => {
            if (e.clientY < 100) {
                setIsVisible(true); 
            } else if (!isScrolling) {
                setIsVisible(false); 
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isScrolling]);

    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <header className={`header ${isSticky && isVisible ? 'visible' : ''}`}>
        <div className="fixedHeaderTitleComp">
            <h1 className="fixedHeaderTitle" onClick={() => scrollToSection('home')}>Wedley</h1>
            <nav className="sectorList">
                <p className="navSobre" onClick={() => scrollToSection('sector-sobre')}>Sobre</p>
                <p className="navSkills" onClick={() => scrollToSection('sector-skills')}>Skills</p>
                <p className="navProjetos" onClick={() => scrollToSection('sector-projetos')}>Projetos</p>
                <p className="navContato" onClick={() => scrollToSection('sector-contato')}>Contato</p>
            </nav>
        </div>
      </header>
    );
};

export default FixedHeader;
