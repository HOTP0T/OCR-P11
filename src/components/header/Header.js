import logo from "../../assets/images/logo/LOGO.svg";
import Nav from "../nav/Nav";

export default function Header() {
  return (
    <header className="header">
      <figure className="header__fig">
      <a href="javascript:history.back()">
      <img className="logo" src={logo} alt="logo de l'agence kasa" />
        </a>
      </figure>
      <Nav className="nav-header" />
    </header>
  );
}
