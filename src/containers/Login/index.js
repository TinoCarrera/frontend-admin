import Layout from "../../components/Layout";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Input from "../../components/UI/Input";

function Login(props) {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
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
                placeholder="Introduce tu contraseña"
                value=""
                onChange={() => {}}
              />
              <Button variant="dark" type="submit">
                Ingresar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Login;
