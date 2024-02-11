import React, { useEffect, useState } from "react";
import { getImageUrl } from "../utils/ImgIndex";
import "../Styles/Hero.css";

export default function Hero() {
  const [currentMode, setCurrentMode] = useState(() => {
    const checkMode = localStorage.getItem("theme");
    if (checkMode === "light") return "light";
    if (checkMode === "dark") return "dark";
    if (checkMode === "auto") {
      localStorage.setItem("theme", "auto");
      return window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      document.getElementById("scrollToTop").style.opacity =
        window.scrollY / 100;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function changeTheme(mode) {
    document.body.setAttribute("data-theme", mode);
  }

  useEffect(() => {
    changeTheme(currentMode);
  }, [currentMode]);

  const handleRadioChange = (e) => {
    localStorage.setItem("theme", e.target.value);
    setCurrentMode(e.target.value);
    console.log(e.target.value);
    return e.target.value;
  };

  // scrollToTop
  function scrollToTop() {
    window.scroll(0, 0);
  }

  return (
    <>
      <details
        style={{
          position: "absolute",
          top: "5px",
          left: "5px",
          cursor: "pointer",
          zIndex: "2",
        }}
      >
        <summary> </summary>
        <form
          className="flex flex-col gap-1 items-center"
          style={{ backdropFilter: "blur(5px)", padding: "10px" }}
        >
          <Radio
            value="auto"
            check={currentMode !== "light" && currentMode !== "dark"}
            change={handleRadioChange}
          />
          <Radio
            value="light"
            check={currentMode === "light"}
            change={handleRadioChange}
          />
          <Radio
            value="dark"
            check={currentMode === "dark"}
            change={handleRadioChange}
          />
        </form>
      </details>

      <section className="h-screen flex flex-row items-center gap-20 hero-container p-10">
        <div className="hero flex flex-col">
          <h1>Hi!</h1>
          <h1>this is</h1>
          <h1>Avinash</h1>
        </div>
        <div>
          <img
            src={getImageUrl("avatar", "jpg")}
            alt="Avatar"
            style={{ width: "450px", borderRadius: "15%" }}
            draggable="false"
          />
        </div>
      </section>
      <div
        id="scrollToTop"
        style={{
          position: "fixed",
          right: "5px",
          bottom: "10px",
          opacity: "0",
          cursor: "pointer",
          zIndex: "3",
        }}
        onClick={scrollToTop}
      >
        <img
          src={getImageUrl("top")}
          alt="Top Logo"
          style={{
            width: "40px",
            backgroundColor: "teal",
            borderRadius: "50%",
            outline: "1px solid black",
          }}
        />
      </div>
    </>
  );
}

function Radio(props) {
  return (
    <>
      <label htmlFor={props.value}>
        <input
          type="radio"
          name="theme"
          id={props.value}
          value={props.value}
          checked={props.check}
          onChange={props.change}
        />
        {props.value}
      </label>
    </>
  );
}
