import { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { ThemeContext } from "../../context/ThemeContext";
import iconeAcessibilidade from "../../assets/img/acessibilidadeIcon.png";
import iconeContrasteBranco from "../../assets/img/contrastIconWhite.png";

import "./style.css";

export function Acessibilidade() {
  const [outlineIsActive, setOutlineIsActive] = useState(false);
  const {darkThemeIsActive, handleTheme} = useContext(ThemeContext);
  //const selectors = "h1, h2, p, a, span, li, label, input, button";
  //const outlineStyle = "*:focus{outline: 5px solid var(--azul-primario)};";

  function handleOutlineIsActive(event){
    setOutlineIsActive(!outlineIsActive);
    alert("Metodo outline não implementado");
  } 

  function handleFontSize(updateValue){
    alert("Metodo handleFontSize não implementado");
  }

  return (
    <Container fluid id="secao-acessibilidade" role="menuitem" aria-label="Seção de configurações de acessibilidade">
      <Row>
        <Col
          xl={6}
          className="d-flex justify-content-center justify-content-xl-between flex-wrap"
        >
          <nav id="atalhos-navegacao" className="n354">
            <ul aria-label="Navegação por atalhos no teclado" className="d-flex justify-content-center mt-3 flex-wrap gap-2">
              <li>
                <a href="#main">Ir para conteúdo[1]</a>
              </li>
              <li>
                <a href="#menu">Ir para menu[2]</a>
              </li>
              <li>
                <a href="#footer">Ir para rodapé[3]</a>
              </li>
            </ul>
          </nav>
        </Col>
        <Col
          xl={6}
          className="d-flex justify-content-center justify-content-xl-end gap-3 align-items-center mb-2 mb-xl-0"
        >
          <div className="p-2">
          <img
            id="icone-acessibilidade"
            src={iconeAcessibilidade}
            alt="Icone mundial de acessibilidade"
          />
          </div>
          <Form.Switch
            id="sw-20"
            type="switch"
            label="Moldurar elementos"
            checked={outlineIsActive}
            onChange={(e) => handleOutlineIsActive(e)}
            onKeyDown={(e) => handleOutlineIsActive(e)}
            aria-checked="true"
            aria-label="Ativar moldura mais destacadas aos elementos em foco"
          />
          <div id="container-botoes">
            <button role="button"
              id="diminuir"
              className="btnAce" 
              onClick={() => handleFontSize()}
              aria-label="(-A) Diminuir tamanho do texto."
              >
              -A
            </button>

            <button role="button"
              className="btnAce"
              onClick={() => handleFontSize()}
              aria-label="(+A) Aumentar tamanho do texto."
            >
              +A
            </button>

            <button role="button"
              className="btnAceC"               
              onClick={handleTheme}
              aria-label="Ativar alto contraste" aria-pressed="false"
            >
              <img
                id="icone-contraste"
                src={iconeContrasteBranco}
                alt="Icone para alterar contraste"
              />
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
