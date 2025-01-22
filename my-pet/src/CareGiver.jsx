import Card from "./components/Card";
import Header from "./components/Header";
import img from "../src/imgs/no-picture.svg";
import arrow from "../src/imgs/arrow-left.svg";
import "./css/careGiver.css";
import { Link } from "react-router-dom";

function CareGiver() {
  return (
    <>
      <Header />
      <Card>
        <h1>Dona</h1>
        <img className="no-picture" src={img} alt="" />
        <h2>Não possui fotos</h2>
      </Card>
      <Card>
        <h3>Voltar</h3>
        <Link className="link-color" to="/portion">
          <img className="arrow-left" src={arrow} alt="" />
        </Link>
      </Card>
    </>
  );
}

export default CareGiver;
