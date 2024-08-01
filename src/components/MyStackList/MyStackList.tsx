import "./MyStackList.scss";

const MyStackList = () => {
  return (
    <div className="stack_container">
      <div className="stack_header">
        <span className="red"></span>
        <span className="yellow"></span>
        <span className="green"></span>
        <p>Stack</p>
      </div>
      <div className="skills">
        <img src="/nextjs_logo.svg" alt="nextjs_logo" className="logo nextjs" />
        <img src="/react_logo.svg" alt="react_logo" className="logo react" />
        <img src="/js_logo.svg" alt="js_logo" className="logo js" />
        <img src="/ts_logo.svg" alt="ts_logo" className="logo ts" />
        <img src="/sass_logo.svg" alt="sass_logo" className="logo sass" />
        <img src="/git_logo.svg" alt="git_logo" className="logo git" />
        <img src="/redux_logo.svg" alt="redux_logo" className="logo redux" />
        <img src="/html_logo.svg" alt="html_logo" className="logo html" />
        <img src="/css_logo.svg" alt="css_logo" className="logo css" />
      </div>
    </div>
  );
};

export default MyStackList;
