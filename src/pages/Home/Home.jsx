import { useState } from "react";
import "./Home.css";
import StepOneForm from "../../components/StepOneForm";
import StepTwoForm from "../../components/StepTwoForm";
import Result from "../../components/Result";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { progressBarSetting } from "./functions/homeFunctions";
import { titleGenerator } from "./functions/homeFunctions";

export default function Home() {
  //states _______________________________________________________________________________
  const [formToDisplay, setFormToDisplay] = useState(0);

  //functions ____________________________________________________________________________
  const backStep = () => {
    formToDisplay > 0 && setFormToDisplay(formToDisplay - 1);
  };

  return (
    <div className="home">
      <div className="forms-container">
        {formToDisplay > 0 && (
          <BsArrowLeftSquareFill
            size={40}
            color="silver"
            className="back-button"
            onClick={backStep}
          />
        )}
        <h1 className="title-form">{titleGenerator(formToDisplay)}</h1>
        {progressBarSetting(formToDisplay)}
        {formToDisplay === 0 && (
          <StepOneForm setFormToDisplay={setFormToDisplay} />
        )}
        {formToDisplay === 1 && (
          <StepTwoForm setFormToDisplay={setFormToDisplay} />
        )}
        {formToDisplay === 2 && <Result setFormToDisplay={setFormToDisplay} />}
      </div>
    </div>
  );
}
