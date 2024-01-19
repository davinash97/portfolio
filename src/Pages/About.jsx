import "../Styles/AboutPage.css";

function AboutPage() {
    return (
        <div className="h-screen flex flex-col text-center justify-evenly content-center">
            <h2 className="text-4xl">About me</h2>
            <p className="text-lg text-justify max-w-3xl px-5 about">
                Hello, I&#39;m <span>Avinash!</span> A Senior-Year{" "}
                <span>Student</span> pursuing a Bachelor&#39;s in Computer
                Science Engineering at RSR Rungta College of Engineering &
                Technology, Bhilai, Chhattisgarh -<span> India</span>.
                Passionate about tech, I bring a strong academic foundation and
                practical project experience to the table. Explore my portfolio
                for more. Thank you!
            </p>
        </div>
    );
}

export default AboutPage;