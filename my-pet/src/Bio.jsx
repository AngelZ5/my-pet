import Header from "./components/Header";
import "../src/css/App.css";
import Card from "./components/Card";
import img from "../src/imgs/lorena.jpeg";

function Bio() {
  return (
    <>
      <Header />
      <Card>
        <h1>Quem é Lorena?</h1>
        <img className="lorena" src={img} alt="Lorena" />
        <p className="bio">
          <strong>
            Lorena é uma gatinha muito especial, cheia de personalidade e amor.
            Ela adora explorar novos lugares, brincar com fios de lã, canetas e
            brinquedos próprios para gatos e sempre tem um olhar curioso que
            conquista todos ao seu redor.
          </strong>
        </p>
      </Card>
      <Card>
        <ul>
          <li>
            <strong>Olhos: verdes</strong>
          </li>
          <li>
            <strong>Cor: bicolor</strong>
          </li>
          <li>
            <strong>Dona: Ester</strong>
          </li>
        </ul>
      </Card>
      <Card>
        <h1>Irmãos:</h1>
        <h2>Arlo</h2>
        <p>Arlo não gosta de fotos</p>
      </Card>
    </>
  );
}

export default Bio;
