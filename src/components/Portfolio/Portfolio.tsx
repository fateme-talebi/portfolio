import CircleComponent from "../CircleComponent";
import "./portfolio.scss";

function Portfolio() {
  return (
    <div className="container">
      <header className="name">Fatemeh Talebi</header>
      <div className="front">FrontEnd developer</div>
      <div className="circle-container">
        <CircleComponent color="color-khaki">
          <div className="about-me">
            <h2>About Me</h2>
            <p>
              Hi there! I'm Fatemeh Talebi, a passionate Frontend Developer with
              3 years of experience specializing in React.js and TypeScript. I
              thrive on tackling complex problems and excel in browser-based
              debugging. With a strong foundation in problem-solving and an eye
              for detail, I aim to deliver robust and efficient solutions that
              enhance user experiences.
            </p>
          </div>
        </CircleComponent>

        <CircleComponent color="color-moon">
          <ul>
            <li>
              <h2>Skills:</h2>
            </li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React.js</li>
            <li>TypeScript</li>
            <li>Ant design</li>
            <li>GIT/TFS</li>
          </ul>
        </CircleComponent>

        <CircleComponent color="color-aliceblue">
          <ul>
            <li>
              <h2>Contact:</h2>
            </li>
            <li>Email: fateme.talebi69@gmail.com</li>
            <li>Phone: +989379979234</li>
            <li>
              LinkedIn:
              <a href="https://www.linkedin.com/in/fateme-talebi-70f">
                LinkedIn
              </a>
            </li>
            <li>
              Github:
              <a href="https://github.com/fateme-talebi">Github</a>
            </li>
          </ul>
        </CircleComponent>
      </div>
    </div>
  );
}

export default Portfolio;
