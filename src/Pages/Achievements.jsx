import "../Styles/Achievements.css";
import { achievementsCard as Card } from "../Components/card";

export default () => {
  return (
    <section className="flex flex-col py-20 justify-between gap-10 px-10 text-center w-screen">
      <h2>Achievements</h2>
      <Card title="PHP" text="Completed Vocational Training" />
      <Card title="Java" text="Scored 71% in NPTEL " />
      <Card title="MS-Office" text="Completed Vocational Training" />
      <Card title="Leetcode:" text="Solved 20+ Questions" />
      <Card title="CodeChef:" text="Solved 50+ Questions" />
    </section>
  );
};
