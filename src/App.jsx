import "./App.css";
import Welcome from "./Pages/Welcome.jsx";
import AboutPage from "./Pages/About.jsx";
import Skills from "./Pages/Skills.jsx";
import Project from "./Pages/Project.jsx";
import Achievements from "./Pages/Achievements.jsx";
import Other from "./Pages/Others.jsx";
import Contacts from "./Pages/Contacts.jsx";

function App() {
  return (
    <>
      <div className="progress" />
      <main className="flex flex-col items-center justify-evenly gap-20">
        <div className="main">
          <Welcome />
        </div>
        <AboutPage />
        <Skills />
        <Project />
        <Achievements />
        <Other />
        <Contacts />
      </main>
    </>
  );
}

export default App;
