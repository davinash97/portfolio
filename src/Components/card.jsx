import Highlight from "./highlight";

const achievementsCard = (props) => {
  return (
    <div className="achievements">
      <h3>{props.title}</h3> {props.text}
    </div>
  );
};

const othersCard = (props) => {
  return (
    <div className="other-content flex items-center gap-10">
      <img src={props.imgSrc} alt={props.title} draggable="false" />
      <p>
        <Highlight text={props.title} />
        {props.paragraph}.
      </p>
    </div>
  );
};

const contactsCard = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <img src={props.imgSrc} alt={props.title} draggable="false" />{" "}
    </a>
  );
};

export { achievementsCard, othersCard, contactsCard };
