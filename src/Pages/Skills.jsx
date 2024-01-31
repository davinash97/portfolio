import { Languages, Tools, OperatingSystems } from "./ImgIndex.jsx";
import { frame as Frame, osFrame as OS } from "../Components/frame.jsx";

export default () => {
  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-center py-10">Skills</h2>
      <div className="flex flex-col justify-around">
        <div>
          <h3 className="text-center">Languages</h3>
          <div className="text-center py-10">(I am comfortable with)</div>
          <div className="w-screen px-10 flex flex-col justify-between gap-10">
            <Frame imgSrc={Languages.html} title="HTML" />
            <Frame imgSrc={Languages.css} title="CSS" />
            <Frame imgSrc={Languages.javascript} title="JavaScript" />
            <Frame imgSrc={Languages.php} title="PHP" />
            <Frame imgSrc={Languages.java} title="Java" />
          </div>
        </div>
        <div>
          <h3 className="text-center py-20">Tools:</h3>
          <div className="w-screen px-10 flex flex-col justify-between gap-10">
            <Frame imgSrc={Tools.git} title="Git" />
            <Frame imgSrc={Tools.figma} title="figma" />
            <Frame imgSrc={Tools.github} title="github" />
            <Frame
              imgSrc={Tools.msoffice}
              title="MS-Office"
              childStyle={{ padding: "20px" }}
            />
            <Frame imgSrc={Tools.code} title="Visual Studio Code" />
            <Frame
              imgSrc={Tools.reactSVG}
              title="React JS"
              parentStyle={{ padding: "35px", gap: "10px" }}
              class="logo"
            />
            <Frame
              imgSrc={Tools.tailwindSVG}
              title="Tailwind CSS"
              childStyle={{ width: "250px" }}
              parentStyle={{ gap: "10px", padding: "30px" }}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-10 py-20">
          <h3 className="text-center">Operating System:</h3>
          <div className="w-screen px-10 flex flex-col justify-between gap-10">
            <OS title="Windows" link={OperatingSystems.win11} />
            <OS title="Linux" link={OperatingSystems.arch} />
          </div>
        </div>
      </div>
    </section>
  );
};
