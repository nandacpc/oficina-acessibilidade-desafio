import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./style.css";

var ObjetoBuscarHoteis = {
  checkIn: "",
  checkOut: "",
  viajantes: 0,
};

export function FormHotel() {
  const [buscarHoteis, setBuscarHoteis] = useState(ObjetoBuscarHoteis);

  function handleSetBuscarHoteis(key, value) {
    setBuscarHoteis({ ...buscarHoteis, [key]: value });
    return;
  }

  function handleSubmit(event) {
    event.preventDefault();
    return alert(
      `Busca realizada para o periodo de ${buscarHoteis.checkIn} até ${buscarHoteis.checkOut} para ${buscarHoteis.viajantes} pessoas.`
    );
  }

  return (
    <Container className="container-form-hotel mb-5 m-auto">
      <Row>
        <Col>
          <form
            className="p-3 d-none d-xl-block"
            onSubmit={(e) => handleSubmit(e)}
            tabIndex="0"
            role="form"
            aria-label="Formulário para realizar buscas de hotéis na região serrana."
          >
            <div className="d-flex flex-column align-items-center flex-lg-row justify-content-lg-between align-items-lg-end">
              <div className="d-flex flex-column p-2">
                <label for="CheckIn">Check In</label>
                <input
                  type="date"
                  name="CheckIn"
                  value={buscarHoteis.checkIn}
                  onChange={(e) =>
                    handleSetBuscarHoteis("checkIn", e.target.value)
                  }
                  id="CheckIn"
                />
              </div>
              <div className="d-flex flex-column p-2">
                <label for="CheckOut">Check Out</label>
                <input
                  type="date"
                  name="CheckOut"
                  value={buscarHoteis.checkOut}
                  onChange={(e) =>
                    handleSetBuscarHoteis("checkOut", e.target.value)
                  }
                  id="CheckOut"
                />
              </div>
              <div className="d-flex flex-column p-2">
                <label for="Viajantes">Viajantes</label>
                <input
                  type="number"
                  name="Viajantes"
                  value={buscarHoteis.viajantes}
                  onChange={(e) =>
                    handleSetBuscarHoteis("viajantes", e.target.value)
                  }
                  id="Viajantes"
                />
              </div>
              <div className="d-flex align-items-end p-2">
                <button
                  className="btn-form-hotel btn-form"
                  type="submit" role="button"
                >
                  Buscar Hotéis
                </button>
              </div>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
