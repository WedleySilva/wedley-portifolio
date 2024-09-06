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
    imageUrl: "./src/media/wether_api_screen.png",
    icons: ["github", "vercel", "vue", "django"],
  },
  {
    titulo: "Solve4u - Sistema Web",
    desc: "Plataforma online desenvolvida para agilizar a gestão de projetos, proporcionando uma abordagem organizada e eficiente na coordenação de tarefas e membros da equipe.",
    status: "Em Desenvolvimento",
    tipo: "Pessoal",
    imageUrl: "./src/media/solve4u_screen.png",
    icons: ["github", "vercel", "react"],
  },
  {
    titulo: "Espaço Innovar  App",
    desc: "Aplicativo que gerencia agenda e organiza para uma cliníca de estética.",
    status: "Concluído",
    tipo: "Pessoal",
    imageUrl: "./src/media/espaco_innovar_screen.png",
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
          <img
            src={projetoAtual.imageUrl}
            alt={projetoAtual.titulo}
            className="imagemProjeto"
            style={{ borderColor: obterCorBorda(projetoAtual.status) }}
          />

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
