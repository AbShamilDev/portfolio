import { useEffect, useState } from "react";
import "./App.scss";
import AnimatedChip from "./components/AnimatedChip/AnimatedChip";
import MyStackList from "./components/MyStackList/MyStackList";

function App() {
  const [showAllow, setShowAllow] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowAllow(true);
    }, 1600);
  }, []);

  return (
    <div className="App">
      <div className="main_screen">
        {" "}
        <div className="bgshadow red"></div>
        <div className="bgshadow blue"></div>
        <span className="site_label">{"ASHDev />"}</span>
        <div className="main_text">
          <h1>FRONTEND</h1>
          <div className="subtext_wrapper">
            <p className="subtext">Developer</p>
            {showAllow && <AnimatedChip text="JUNIOR" duration={2.5} fontSize={40} />}
          </div>
        </div>
        <MyStackList />
        <img src="/me.webp" alt="" className="me_photo" />
      </div>
    </div>
  );
}

export default App;
