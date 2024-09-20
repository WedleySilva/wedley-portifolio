import React, { useState } from "react";
import "../../style/sectors/SectorProjetos.css";
import { IoIosArrowUp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SiVercel, SiDjango, SiReact } from "react-icons/si";
import { IoLogoVue } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";

const dadosProjetos = [
  {
    titulo: "Wether API - Foreca",
    desc: "Site de pesquisa e exibição de clima de várias cidades pelo mundo.",
    status: "Em Refatoração",
    tipo: "Acadêmico",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/wedley-portifolio.appspot.com/o/Projetos%2Fwether_api_screen.png?alt=media&token=e03eb1e0-1694-47ad-8c93-b96c3193ead2",
    icons: ["github", "vercel", "vue", "django"],
    link: "https://wether-project-vue.vercel.app",
  },
  {
    titulo: "Solve4u - Sistema Web",
    desc: "Plataforma online desenvolvida para agilizar a gestão de projetos, proporcionando uma abordagem organizada e eficiente na coordenação de tarefas e membros da equipe.",
    status: "Em Desenvolvimento",
    tipo: "Pessoal",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/wedley-portifolio.appspot.com/o/Projetos%2Fsolve4u_screen.png?alt=media&token=c9bab49d-8f62-4a94-9701-5d3b5c8e4bf9",
    icons: ["github", "vercel", "react"],
    link: "https://solve4u.vercel.app/",
  },
  {
    titulo: "Espaço Innovar  App",
    desc: "Aplicativo que gerencia agenda e organiza para uma cliníca de estética.",
    status: "Concluído",
    tipo: "Pessoal",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/wedley-portifolio.appspot.com/o/Projetos%2Fespaco_innovar_screen.png?alt=media&token=217dd6b6-e3d4-482d-8aac-e637a1a55e9f",
    icons: ["github", "reactNative", "django"],
  },
];

const SectorProjetos = () => {
  const [indiceProjetoAtual, setIndiceProjetoAtual] = useState(0);

  const projetoAnterior = () => {
    setIndiceProjetoAtual((indiceAnterior) =>
      indiceAnterior === 0 ? dadosProjetos.length - 1 : indiceAnterior - 1
    );
  };

  const projetoProximo = () => {
    setIndiceProjetoAtual((indiceAtual) =>
      indiceAtual === dadosProjetos.length - 1 ? 0 : indiceAtual + 1
    );
  };

  const projetoAtual = dadosProjetos[indiceProjetoAtual];

  const obterIcone = (nome) => {
    switch (nome) {
      case "github":
        return <FaGithub className="githubIconProj"/>;
      case "vercel":
        return <SiVercel className="vercelIconProj"/>;
        case "react":
        return <SiReact className="reactIconProj"/>;
      case "vue":
        return <IoLogoVue className="vueIconProj"/>;
      case "django":
        return <SiDjango className="djangobIconProj"/>;
        case "reactNative":
            return <TbBrandReactNative className="reactNativebIconProj"/>
      default:
        return null;
    }
  };

  return (
    <div className="sectorProjetos">
      <h2 className="tituloProjetos">Meus projetos</h2>
      <p className="textoProjetos">Projetos pessoais e acadêmicos.</p>

      <div className="carrossel">
        <button className="seta setaEsquerda" onClick={projetoAnterior}>
          <IoIosArrowUp className="setaIcone" />
        </button>

        <div className="conteudoCarrossel">
          <div className="textoAcima">
            <h3 className="tituloProjeto">{projetoAtual.titulo}</h3>
            <p className="descricaoProjeto">{projetoAtual.desc}</p>
          </div>
          <a href={projetoAtual.link} target="_blank" rel="noopener noreferrer">
            <img
              src={projetoAtual.imageUrl}
              alt={projetoAtual.titulo}
              className="imagemProjeto"
              style={{ borderColor: obterCorBorda(projetoAtual.status) }}
            />
          </a>

          <div className="textoAbaixo">
            <div className="iconsProjeto">
              {projetoAtual.icons.map((icone, index) => (
                <span key={index} className="icone">
                  {obterIcone(icone)}
                </span>
              ))}
            </div>
            <p className="statusProjeto" data-status={projetoAtual.status}>{projetoAtual.status}</p>
            <p className="tipoProjeto">{projetoAtual.tipo}</p>
          </div>
        </div>

        <button className="seta setaDireita" onClick={projetoProximo}>
          <IoIosArrowUp className="setaIcone" />
        </button>
      </div>
    </div>
  );
};

const obterCorBorda = (status) => {
  switch (status) {
    case "Em Refatoração":
      return "#FB8800";
    case "Em Desenvolvimento":
      return "#0083FB";
    case "Concluído":
      return "#00C543";
    default:
      return "#FFFF";
  }
};

export default SectorProjetos;
