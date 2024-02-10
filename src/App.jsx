import "./App.css";
import React from "react";
import AboutPage from "./Pages/About.jsx";
import Skills from "./Pages/Skills.jsx";
import Project from "./Pages/Project.jsx";
import Achievements from "./Pages/Achievements.jsx";
import Other from "./Pages/Others.jsx";
import Contacts from "./Pages/Contacts.jsx";
import Hero from "./Pages/Hero.jsx";

export default function App() {
  return (
    <>
      <div className="progress" />
      <main className="flex flex-col items-center justify-evenly gap-20">
        <Hero />
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
