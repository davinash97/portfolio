import { React, useEffect } from "react";
import "../Styles/Welcome.css";

export default function Welcome() {
  useEffect(() => {
    const handleScroll = () => {
      const opacityValue = window.scrollY >= 25 ? 0 : 1;
      document.getElementById("scroll").style.opacity = opacityValue;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="h-screen flex flex-col items-center justify-around">
      <h1
        style={{
          height: "100vh",
        }}
        id="welcome"
        className="text-6xl flex flex-col text-center items-center justify-center"
      >
        Hey there!
      </h1>
      <div
        className="text-base"
        id="scroll"
        style={{
          transition: "opacity 500ms ease-in-out",
        }}
      >
        Scroll Down
      </div>
    </section>
  );
}
