import css from "./Header.module.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className={css.header}>
      <img className={css.logo} src={logo} alt="logo" />
      <nav className={css.nav}>
        <ul className={css.list}>
          <li className={css.list_elem}>Home</li>
          <li className={css.list_elem}>Guides</li>
          <li className={css.list_elem}>Endings</li>
          <li className={css.list_elem}>Mita</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;