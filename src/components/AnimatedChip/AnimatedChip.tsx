import "./AnimatedChip.style.scss";

export default function AnimatedChip({ text, duration }: { text: string; duration: number }) {
  return (
    <div
      className="chip"
      style={{ animation: `show_border 0.3s ease ${duration + 0.1}s forwards` }}
    >
      <p
        style={{
          animation: `cursor 1s ${Math.ceil(duration)} forwards, printed_text ${duration}s steps(${
            text.length
          })`,

          width: text.length + "ch",
        }}
        className="chip_text"
      >
        {text}
      </p>
    </div>
  );
}
