import Card from "./components/Card";
import Header from "./components/Header";
import "../src/css/portion.css";
import img from "../src/imgs/arrow-left.svg";
import { Link } from "react-router-dom";

function Portion() {
  return (
    <>
      <Header />
      <Card>
        <h1>Ração:</h1>
        <h2>
          Lorena é <strong>apaixonada</strong> por sua ração especial de frango
          com salmão. Além de ser saborosa, ela adora o cheirinho assim que o
          pacote é aberto. Essa ração é rica em proteínas e ajuda a manter seu
          pelo brilhante e macio. Quando Lorena ouve o som da embalagem, ela
          corre para sua tigela com aquele olhar irresistível de "estou
          faminta!". Mesmo sendo exigente, essa é a ração que conquista o
          coração dela todos os dias. 🐾
        </h2>
      </Card>
      <Card>
        <ul className="portion-infos">
          <li>Marca: Purina</li>
          <li>Valor: 77,14R$</li>
          <li className="site">
            <a href="">
              <span>Site:</span> Comprar
            </a>
          </li>
        </ul>
      </Card>
      <Card>
        <h3>Voltar</h3>
        <Link className="link-color" to="/bio">
          <img className="arrow-left" src={img} alt="" />
        </Link>
      </Card>
    </>
  );
}

export default Portion;
