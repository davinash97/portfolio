import "./App.css";
import Welcome from "./Pages/Welcome.jsx";
import AboutPage from "./Pages/About.jsx";
import Skills from "./Pages/Skills.jsx";
import Project from "./Pages/Project.jsx";
import Achievements from "./Pages/Achievements.jsx";
import Other from "./Pages/Others.jsx";
import Contacts from "./Pages/Contacts.jsx";

function App() {
    console.warn("Yes! I am aware of Performance Issues and I am planning to fix it after exams.")
    return (
        <main className="flex flex-col items-center justify-evenly gap-20">
            <Welcome />
            <AboutPage />
            <Skills />
            <Project />
            <Achievements />
            <Other />
            <Contacts />
        </main>
    );
}

export default App;
