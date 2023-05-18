import React from "react";
import "./GradientCard.scss";

const GradientCard = ({ span, title }) => {
  return (
    <div className="card__container">
      <div role="button">
        <span class="glow"></span>
        <div>
          <span>{span}</span>
          {title}
        </div>
      </div>
    </div>
  );
};

export default GradientCard;
