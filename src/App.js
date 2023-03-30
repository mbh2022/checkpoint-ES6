import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import "./App.css";

function App() {
  return (
    <Container id="main-container" className="d-grid h-100">
      <form id="sign-in-form" className="text-center w100">
        <img
          className="khomsa"
          src="http://conso.cherche.info/wp-content/uploads/2023/03/cropped-cherche.info_.jpg"
          alt="bootstraptest"
        ></img>
        <h1 className="fs-3">Enter Hassani</h1>

        <Form.Group>
          <Form.Control
            type="Email"
            size="lg"
            placeholder="Adresse mail"
            autoComplete="username"
            className="position-relative"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="Password"
            size="lg"
            placeholder="password"
            autoComplete="current-password"
            className="position-relative"
          />
        </Form.Group>
      </form>
    </Container>
  );
}

export default App;
