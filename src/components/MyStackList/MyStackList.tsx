import "./MyStackList.style.scss";

const skills = [
  {
    src: "/nextjs_logo.svg",
    name: "nextjs",
  },
  {
    src: "/react_logo.svg",
    name: "react",
  },
  {
    src: "/js_logo.svg",
    name: "js",
  },
  {
    src: "/ts_logo.svg",
    name: "ts",
  },
  {
    src: "/sass_logo.svg",
    name: "sass",
  },
  {
    src: "/git_logo.svg",
    name: "git",
  },
  {
    src: "/redux_logo.svg",
    name: "redux",
  },
  {
    src: "/html_logo.svg",
    name: "html",
  },
  {
    src: "/css_logo.svg",
    name: "css",
  },
];

export default function MyStackList() {
  return (
    <div className="stack_container">
      <div className="stack_header">
        <span className="red"></span>
        <span className="yellow"></span>
        <span className="green"></span>
        <p>Stack</p>
      </div>

      <div className="skills">
        {skills.map((skill, i) => (
          <img
            key={skill.name}
            src={skill.src}
            alt={`logo_${skill.name}`}
            style={{ gridArea: skill.name, animationDelay: 4 + i * 0.1 + "s" }}
          />
        ))}
      </div>
    </div>
  );
}
