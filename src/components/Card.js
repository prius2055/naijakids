import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <img src={props.image} alt="Timer" />
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
