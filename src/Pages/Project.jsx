import "../Styles/Project.css";
import { projectFrame as ProjectFrame } from "../Components/frame.jsx";
import { Projects } from "./ImgIndex.jsx";

export default () => {
  const GlobalBuzz =
    "A Dynamic Web application for News. Frontend written in JavaScript with (HTML & CSS) and Backend is written solely on PHP. Powered by NewsAPI.";

  const PasswordGenerator = `A Web application to generate a String containing various data type(s) (int, char or normal Uppercase/Lowercase) with data preference. Written in
    JavaScript with (HTML & CSS).`;
  return (
    <section className="flex flex-col w-screen">
      <h2 className="py-20 text-center">Projects</h2>
      <div className="flex flex-col gap-20 px-5">
        <ProjectFrame
          title="Global Buzz"
          link="https://davinash97.github.io/globalbuzz"
          imgSrc={Projects.globalBuzz}
          paragraph={GlobalBuzz}
        />

        <ProjectFrame
          title="Password Generator"
          imgSrc={Projects.passGen}
          link="https://davinash97.github.io/pass-gen"
          paragraph={PasswordGenerator}
        />
      </div>
    </section>
  );
};
