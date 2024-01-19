import "../Styles/Skills.css";
import html from "../../assets/svg/html.svg";
import css from "../../assets/svg/css.svg";
import javascript from "../../assets/svg/javascript.svg";
import php from "../../assets/svg/php.svg";
import java from "../../assets/svg/java.svg";

import git from "../../assets/svg/git.svg";
import figma from "../../assets/svg/figma.svg";
import github from "../../assets/svg/github.svg";
import msoffice from "../../assets/svg/msoffice.svg";
import code from "../../assets/svg/code.svg";
import win11 from "../../assets/svg/win11.svg";
import arch from "../../assets/svg/arch.svg";

function skillsPage() {
    return (
        <div className="flex flex-col gap-5">
            <h2 className="text-center py-10">Skills</h2>
            <div className="flex flex-col justify-around">
                <div>
                    <h3 className="text-center">Languages</h3>
                    <div className="text-center py-10">
                        (I am comfortable with)
                    </div>
                    <div className="w-screen px-10 flex flex-col justify-between gap-10">
                        <div className="frameBox">
                            <img src={html} alt="HTML" draggable="false" />
                            <div className="title">HTML</div>
                        </div>
                        <div className="frameBox">
                            <img
                                src={css}
                                alt="CSS"
                                draggable="false"
                            />
                            <div className="title">CSS</div>
                        </div>
                        <div className="frameBox">
                            <img
                                src={javascript}
                                alt="JavaScript"
                                draggable="false"
                            />
                            <div className="title">JavaScript</div>
                        </div>
                        <div className="frameBox">
                            <img
                                src={php}
                                alt="PHP"
                                draggable="false"
                            />
                            <div className="title">PHP</div>
                        </div>
                        <div className="frameBox">
                            <img
                                src={java}
                                alt="Java"
                                draggable="false"
                            />
                            <div className="title">Java</div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-center py-20">Tools:</h3>
                    <div className="w-screen px-10 flex flex-col justify-between gap-10">
                        <div className="frameBox">
                            <img src={git} alt="Git" draggable="false" />
                            <div className="title">Git</div>
                        </div>
                        <div className="frameBox">
                            <img src={figma} alt="Figma" draggable="false" />
                            <div className="title">Figma</div>
                        </div>
                        <div className="frameBox">
                            <img src={github} alt="GitHub" draggable="false" />
                            <div className="title">GitHub</div>
                        </div>
                        <div className="frameBox">
                            <img
                                src={msoffice}
                                alt="MS-Office"
                                draggable="false"
                            />
                            <div className="title">MS-Office</div>
                        </div>
                        <div className="frameBox">
                            <img
                                src={code}
                                alt="VisualStudioCode"
                                draggable="false"
                            />
                            <div className="title">Visual Studio Code</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-10 py-20">
                    <h3 className="text-center">Operating System:</h3>
                    <div className="w-screen px-20 flex flex-col justify-between gap-10">
                        <div className="OsContainer">
                            <div className="title">Windows</div>
                            <img
                                style={{ minWidth: "15%" }}
                                src={win11}
                                alt="Windows"
                                draggable="false"
                            />
                        </div>
                        <div className="OsContainer">
                            <img src={arch} alt="Linux" draggable="false" />
                            <div className="title">Linux</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default skillsPage;
