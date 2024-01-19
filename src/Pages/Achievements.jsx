import "../Styles/Achievements.css";

function Achievements() {
  return (
    <section className="flex flex-col py-20 justify-between gap-10 px-10 text-center w-screen">
      <h2>Achievements</h2>
      <div className="achievements">
        <h3>PHP</h3> Completed Vocational Training
      </div>
      <div className="achievements">
        Scored 71% in NPTEL <h3>Java</h3>
      </div>
      <div className="achievements">
        <h3>MS-Office:</h3> Completed Vocational Training
      </div>
      <div className="achievements">
        Solved 20+ Questions <h3>Leetcode</h3>
      </div>
      <div className="achievements">
        <h3>CodeChef:</h3> Solved 50+ Questions
      </div>
    </section>
  );
}

export default Achievements;
