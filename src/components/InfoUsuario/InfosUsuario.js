import React from "react";
import { ContainerFlex, H4 } from "./styled";

function InfosUsuario(props) {
  
  return (
    <ContainerFlex>
      <img src={props.usuario.foto} alt="imagem do usuário" />
      <H4>Autor: {props.usuario.nome}</H4>
    </ContainerFlex>
  );
}

export default InfosUsuario;
