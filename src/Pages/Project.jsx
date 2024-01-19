import "../Styles/Project.css";
import globalBuzz from "../../assets/png/globalBuzz.png";
import passGen from "../../assets/png/passGen.png";

function Project() {
    return (
        <div className="flex flex-col w-screen">
            <h2 className="py-20 text-center">Projects</h2>
            <div className="flex flex-col gap-20 px-5">
                <div className="projectFrame p-10">
                    <h3 className="text-center" style={{ fontSize: "2rem" }}>
                        Global Buzz
                    </h3>
                    <div className="flex flex-row content-center justify-center w-auto">
                        <p>
                            A <a href="https://davinash97.github.io/globalbuzz" target="_blank"><span>&#39;Dynamic Web application&#39;</span></a> for News.
                            Frontend written in JavaScript with (HTML & CSS) and
                            Backend is written solely on PHP. Powered by
                            NewsAPI.
                        </p>
                        <img
                            src={globalBuzz}
                            alt="Global Buzz"
                            draggable="false"
                        />
                    </div>
                </div>

                <div className="projectFrame p-10">
                    <h3 className="text-center" style={{ fontSize: "2rem" }}>
                        Password Generator
                    </h3>
                    <div className="flex flex-row content-center justify-center w-auto">
                        <img
                            src={passGen}
                            alt="Password Generator"
                            draggable="false"
                        />
                        <p>
                            A <a href="https://davinash97.github.io/pass-gen" target="_blank"><span>&#39;Web application&#39;</span></a> to generate a String
                            containing various data type(s) (int, char or normal
                            Uppercase/Lowercase) with data preference. Written
                            in JavaScript with (HTML & CSS).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
