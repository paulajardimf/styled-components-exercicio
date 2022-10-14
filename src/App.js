import React from "react";
import { GlobalStyled } from "./GlobalStyled";
import { BotoesMenuVertical, ContainerFlex, Header, Main, MenuVertical, PainelDeVideos, H4, Footer } from "./styled";
import CardVideo from "./components/CardVideo/CardVideo"

export default function App() {
  const reproduzVideo = () => {
    alert("O vídeo está sendo reproduzido");
  };

  const video1 = {
    imagem: "https://picsum.photos/400/400?a=1",
    titulo: "Video 1"
  }

  const video2 = {
    imagem: "https://picsum.photos/400/400?a=2",
    titulo: "Video 2"
  }

  const video3 = {
    imagem: "https://picsum.photos/400/400?a=3",
    titulo: "Video 3"
  }

  const video4 = {
    imagem: "https://picsum.photos/400/400?a=4",
    titulo: "Video 4"
  }

  const video5 = {
    imagem: "https://picsum.photos/400/400?a=5",
    titulo: "Video 5"
  }

  const video6 = {
    imagem: "https://picsum.photos/400/400?a=6",
    titulo: "Video 6"
  }

  const video7 = {
    imagem: "https://picsum.photos/400/400?a=7",
    titulo: "Video 7"
  }

  const video8 = {
    imagem: "https://picsum.photos/400/400?a=8",
    titulo: "Video 8"
  }

  return (
    <div>
      <GlobalStyled/>
      <ContainerFlex>
        <Header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </Header>

        <Main>
          <MenuVertical>
            <ul>
              <BotoesMenuVertical>
                <li>Início</li>
                <li>Em alta</li>
                <li>Inscrições</li>
              </BotoesMenuVertical>
              <hr />
              <BotoesMenuVertical>
                <li>Originais</li>
                <li>Histórico</li>
              </BotoesMenuVertical>
            </ul>
          </MenuVertical>
          <PainelDeVideos>
            <CardVideo video={video1} reproduzVideo={reproduzVideo}/>
            <CardVideo video={video2} reproduzVideo={reproduzVideo}/>
            <CardVideo video={video3} reproduzVideo={reproduzVideo}/>
            <CardVideo video={video4} reproduzVideo={reproduzVideo}/>
            <CardVideo video={video5} reproduzVideo={reproduzVideo}/>
            <CardVideo video={video6} reproduzVideo={reproduzVideo}/>
            <CardVideo video={video7} reproduzVideo={reproduzVideo}/>
            <CardVideo video={video8} reproduzVideo={reproduzVideo}/>
          </PainelDeVideos>
        </Main>

        <Footer>
          <H4>Oi! Eu moro no footer!</H4>
        </Footer>
      </ContainerFlex>
    </div>
  );
}
