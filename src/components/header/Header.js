import logo from "../../assets/images/logo/LOGO.svg";
import Nav from "../nav/Nav";

// history.back() sera obsolète à l'avenir, donc nous devrions utiliser une simple balise <a> pour revenir à la page précédente à l'avenir

export default function Header() {
  return (
    <header className="header">
      <figure className="header__fig">

        <a href="#">
      <img className="logo" src={logo} alt="logo de l'agence kasa" />
        </a>
        
      </figure>
      <Nav className="nav-header" />
    </header>
  );
}