import "./AnimatedChip.scss";

const AnimatedChip = ({
  text,
  duration,
  fontSize,
}: {
  text: string;
  duration: number;
  fontSize: number;
}) => {
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
          fontSize,
          width: text.length + "ch",
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default AnimatedChip;
