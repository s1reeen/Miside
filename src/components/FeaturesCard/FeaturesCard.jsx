const FeaturesCard = ({ svg, title, description }) => {
  return (
    <div className="features-card">
      <div className="features-card-icon">{svg}</div>{" "}
      <div className="features-card-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
