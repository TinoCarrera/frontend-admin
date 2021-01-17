import Layout from "../../components/Layout";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Input from "../../components/UI/Input";

function Register(props) {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    controlId="formBasicFirstName"
                    label="Nombre"
                    type="text"
                    placeholder="Introduce tu nombre"
                    value=""
                    onChange={() => {}}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    controlId="formBasicLastName"
                    label="Apellido"
                    type="text"
                    placeholder="Introduce tu apellido"
                    value=""
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Input
                controlId="formBasicUserName"
                label="Nombre de usuario"
                type="text"
                placeholder="Introduce un nombre de usuario"
                value=""
                onChange={() => {}}
              />
              <Input
                controlId="formBasicEmail"
                label="Correo electrónico"
                type="email"
                placeholder="Introduce tu correo electrónico"
                value=""
                onChange={() => {}}
              />
              <Input
                controlId="formBasicPassword"
                label="Contraseña"
                type="password"
                placeholder="Introduce una contraseña"
                value=""
                onChange={() => {}}
              />
              <Button variant="dark" type="submit">
                Registrarse
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Register;
