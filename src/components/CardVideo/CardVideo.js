import React from "react";
import InfosUsuario from "../InfoUsuario/InfosUsuario";
import { Box , BoxImg, H4} from "./styled";

function CardVideo(props) {
  const usuario = {
    nome: "Zibiruta",
    foto: "https://picsum.photos/id/237/70/55"
  }
  
  return (
    <Box onClick={props.reproduzVideo}>
      <BoxImg src={props.video.imagem} alt="" />
      <H4>{props.video.titulo}</H4>
      <InfosUsuario usuario={usuario} />
    </Box>
  );
}

export default CardVideo;
