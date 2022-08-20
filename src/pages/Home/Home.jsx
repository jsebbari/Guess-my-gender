import { useState } from "react";
import "./Home.css";
import StepOneForm from "../../components/StepOneForm";
import StepTwoForm from "../../components/StepTwoForm";
import Result from "../../components/Result";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import {  titleGenerator, progressBarSetting} from "./functions/homeFunctions";


export default function Home() {
  //states _______________________________________________________________________________
  const [stepToDisplay, setStepToDisplay] = useState(0);

  //functions ____________________________________________________________________________
  const handleBackStep = () => {
    stepToDisplay > 0 && setStepToDisplay(stepToDisplay - 1);
  };

  return (
    <div className="home">
      <div className="forms-container">
        {stepToDisplay > 0 && (
          <BsArrowLeftSquareFill
            size={40}
            color="silver"
            className="back-button"
            onClick={handleBackStep}
          />
        )}
        <h1 className="title-form">{titleGenerator(stepToDisplay)}</h1>
        {progressBarSetting(stepToDisplay)}
        {stepToDisplay === 0 && (
          <StepOneForm setStepToDisplay={setStepToDisplay} />
        )}
        {stepToDisplay === 1 && (
          <StepTwoForm setStepToDisplay={setStepToDisplay} />
        )}
        {stepToDisplay === 2 && <Result setStepToDisplay={setStepToDisplay} />}
      </div>
    </div>
  );
}
