import React from "react";
import { getImageUrl } from "../utils/ImgIndex";
import "../Styles/Hero.css";

export default function Hero() {
  return (
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
  );
}
