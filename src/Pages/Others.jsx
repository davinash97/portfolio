import "../Styles/Others.css";

import { samsung, android, robot } from "./ImgIndex.mjs";

function Others() {
  return (
    <section
      className="Others flex flex-col gap-12 px-10 justify-between items-center"
      style={{ minWidth: "50vw" }}
    >
      <h2 className="text-center">Others:</h2>
      <div className="other-content flex items-center gap-10">
        <img src={samsung} alt="Samsung Exynos" draggable="false" />
        <p>
          <span>Android Kernel: &#127;</span>
          Maintained kernel for Samsung Exynox 7870 (Used to).
        </p>
      </div>
      <div className="other-content flex items-center gap-10">
        <p>
          <span>Android ROMs: &#127;</span>
          Contributed in some Custom ROMs for Samsung Exynos 7870 (Used to).
        </p>
        <img src={android} alt="Android" draggable="false" />
      </div>
      <div className="other-content flex items-center gap-10">
        <img src={robot} alt="Robot" draggable="false" />
        <p>
          <span>Telegram Bot(s): &#127;</span>
          Contributed to some Open-Source Telegram bots written using
          Python-Telegram-bot library.
        </p>
      </div>
    </section>
  );
}

export default Others;
