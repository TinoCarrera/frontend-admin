import Jumbotron from "react-bootstrap/Jumbotron";
import Layout from "../../components/Layout";

function Home() {
  return (
    <Layout>
      <Jumbotron
        style={{ margin: "5rem", background: "#fff" }}
        className="text-center"
      >
        <h1>Bienvenido a la página de administración</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          semper quam laoreet purus mollis, ac posuere lacus pharetra. Praesent
          at mollis nisi, at sagittis nisl. Fusce aliquam, eros fermentum
          ullamcorper dapibus, nisl elit mattis enim, et tempor sem mi quis
          orci. Aliquam vel nulla lobortis, vehicula nisi non, pharetra velit.
          Nunc sodales augue non gravida pretium. Integer vestibulum aliquet
          risus. Fusce facilisis nisl a tincidunt lacinia. Curabitur at nisl a
          justo semper aliquet non vitae nisl. Morbi sed hendrerit risus. Morbi
          vitae orci lacus. Aenean sodales tincidunt ipsum, vitae finibus est
          dictum non. Nam mauris metus, tincidunt quis justo a, finibus tempor
          orci. Duis vel varius sem.
        </p>
      </Jumbotron>
    </Layout>
  );
}

export default Home;
