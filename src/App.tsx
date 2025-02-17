import { useEffect, useState } from "react";
import "./App.scss";
import AnimatedChip from "./components/AnimatedChip/AnimatedChip";
import MyStackList from "./components/MyStackList/MyStackList";
import Header from "./components/Header/Header";

function App() {
  const [showAllow, setShowAllow] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowAllow(true);
    }, 3600);
  }, []);

  return (
    <div className="App">
      <Header />

      <div id="main_screen">
        <div className="bgshadow red"></div>
        <div className="bgshadow blue"></div>
        <div className="main_text">
          <h1>FRONTEND</h1>
          <div className="subtext_wrapper">
            <p className="subtext">Developer</p>
            {showAllow && <AnimatedChip text="middle" />}
          </div>
        </div>
        <MyStackList />
        <img src="/me.webp" alt="" className="me_photo" />
      </div>
    </div>
  );
}

export default App;
