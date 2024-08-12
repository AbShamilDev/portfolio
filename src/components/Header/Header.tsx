import "./Header.style.scss";

export default function Header() {
  return (
    <header>
      <span className="site_label">{"ASHDev />"}</span>
      <nav className="menu">
        <a href="">О себе</a>
        <a href="">Проекты</a>
        <a href="">Контакты</a>
      </nav>
    </header>
  );
}
