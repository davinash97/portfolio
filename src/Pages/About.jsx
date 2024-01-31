import Highlight from "../Components/highlight";

export default () => {
  return (
    <section className="h-screen flex flex-col text-center justify-evenly content-center">
      <h2 className="text-4xl">About me</h2>
      <div className="about-container">
        <p className="text-lg text-justify max-w-3xl px-5 about">
          Hello, I&#39;m <Highlight text="Avinash" /> A Senior-Year{" "}
          <Highlight text="Student" /> pursuing a Bachelor&#39;s in Computer
          Science Engineering at RSR Rungta College of Engineering & Technology,
          Bhilai, Chhattisgarh -<Highlight text="India" />. Passionate about
          tech, I bring a strong academic foundation and practical project
          experience to the table. Explore my portfolio for more. Thank you!
        </p>
      </div>
    </section>
  );
};
