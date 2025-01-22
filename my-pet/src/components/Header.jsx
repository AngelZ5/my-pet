import "../css/header.css";
import img from "../imgs/paws.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <img className="paws" src={img} alt="" />
        <h1>Meu pet</h1>
        <nav>
          <ul>
            <li>
              <Link to="/Bio">Biografia</Link>
            </li>
            <li>
              <Link to="/portion">Ração</Link>
            </li>
            <li>
              <Link to="/caregiver">Dona</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
