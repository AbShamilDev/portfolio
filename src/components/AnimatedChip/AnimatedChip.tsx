import { useEffect, useState } from "react";
import "./AnimatedChip.style.scss";

const AnimatedChip = ({ text }: { text: string }) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [renderText, setRenderText] = useState("");

  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (fontLoaded && renderText.length < text.length) {
      setTimeout(
        () => setRenderText((prev) => prev + text[prev.length]),
        renderText.length === 0 ? 2000 : 180
      );
    }
  }, [renderText, fontLoaded]);

  return (
    <div className="chipWrapper">
      <div
        className="chip"
        style={
          renderText.length === text.length ? { animation: "show_mask 1s 1s ease forwards" } : {}
        }
      />
      <div className="textContainer">
        <p
          className="chip_text"
          style={
            renderText.length === text.length
              ? { animation: "text_disappear 1s 1s ease forwards" }
              : {}
          }
        >
          {renderText}
        </p>
      </div>
    </div>
  );
};

export default AnimatedChip;
