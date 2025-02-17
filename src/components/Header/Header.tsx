import { MouseEvent } from "react";
import "./Header.style.scss";

export default function Header() {
  const clearUrl = (event: MouseEvent<HTMLAnchorElement>) => {
    const target = event.target as HTMLAnchorElement;
    console.log(window.history);
  };

  return (
    <header>
      <span className="site_label">{"ASHDev />"}</span>
      <nav className="menu" onClick={clearUrl}>
        <a href="#main_screen">О себе</a>
        <a href="#projects">Проекты</a>
        <a href="#contacts">Контакты</a>
      </nav>
    </header>
  );
}
