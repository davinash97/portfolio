import "../Styles/Others.css";
import { getImageUrl } from "./ImgIndex.jsx";

import { othersCard as Card } from "../Components/card.jsx";

export default () => {
  const AndroidKernel = "Maintained kernel for Samsung Exynos 7870 (Used to).";
  const AndroidROMs =
    "Contributed in some Custom ROMs for Samsung Exynos 7870 (Used to).";
  const TelegramBot =
    "Contributed to some Open-Source Telegram bots written using Python-Telegram-bot library.";
  return (
    <section
      className="Others flex flex-col gap-12 px-10 justify-between items-center"
      style={{ minWidth: "50vw" }}
    >
      <h2 className="text-center">Others:</h2>
      <Card
        title="Android Kernel:"
        paragraph={" " + AndroidKernel}
        imgSrc={getImageUrl("samsung")}
      />
      <Card
        title="Android ROMs:"
        paragraph={" " + AndroidROMs}
        imgSrc={getImageUrl("android")}
      />
      <Card
        title="Telegram Bots:"
        paragraph={" " + AndroidKernel}
        imgSrc={getImageUrl("robot")}
      />
    </section>
  );
};
