import React from "react";

const QuestionnaireControl = ({ activeSection, sectionChange }) => {
  switch (activeSection) {
    case "giveaway-things":
      return (
        <div className="form-steps-buttons">
          <button className="next-btn" onClick={() => sectionChange("packing-instructions")}>Next</button>
        </div>
      );

    case "packing-instructions":
      return (
        <div className="form-steps-buttons">
          <button onClick={() => sectionChange("giveaway-things")} className="next-btn">Back</button>
          <button onClick={() => sectionChange("localization")} className="next-btn">Next</button>
        </div>
      );

    case "localization":
      return (
        <div className="form-steps-buttons">
          <button onClick={() => sectionChange("packing-instructions")} className="next-btn">Back</button>
          <button onClick={() => sectionChange("pickup")} className="next-btn">Next</button>
        </div>
      );

    case "pickup":
      return (
        <div className="form-steps-buttons">
          <button onClick={() => sectionChange("localization")} className="next-btn">Next</button>
        </div>
      );

    default:
      return (
        <div className="form-steps-buttons">
          <button onClick={() => sectionChange("packing-instructions")} className="next-btn">Dalej</button>
        </div>
      );
  }
};

export default QuestionnaireControl;
