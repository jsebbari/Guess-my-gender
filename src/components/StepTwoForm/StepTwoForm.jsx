import { useContext, useState, useEffect, useRef } from "react";
import "../../styles/forms.css";
import "./StepTwoForm.css";
import { UserContext } from "../../context/UserContext";

export default function StepTwoForm(props) {
  //context _______________________________________________________________________________
  const { setUser, user } = useContext(UserContext);
  const { gender, probability } = user;

  //states _______________________________________________________________________________
  const [errorMessage, setErrorMessage] = useState(null);
  const [ageValue, setAgeValue] = useState("");

  //ref ___________________________________________________________________________________
  const ageRef = useRef();

  //effects _______________________________________________________________________________
  useEffect(() => {
    if (user.age) {
      setAgeValue(user.age);
    }

    return ageRef.current.focus();
  }, [user]);

  // variables __________________________________________________________________________
  const { setFormToDisplay } = props;

  // functions ____________________________________________________________________________

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ageValue === "") {
      setErrorMessage("Please, complete all inputs");
    } else {
      setErrorMessage(null);

      setUser({ ...user, age: ageValue });
      setFormToDisplay(2);
    }
  };

  const handleAgeInput = (e) => {
    setErrorMessage(null);
    setAgeValue(e.target.value);
  };

  return (
    <div className="step-two-form">
      <div className="gender-container">
        <p>
          Gender: <span>{gender}</span>
        </p>
        <p>
          Probability: <span>{probability} %</span>
        </p>
      </div>
      <form onSubmit={handleSubmit} className="forms">
        {setErrorMessage !== null && (
          <p className="error-message">{errorMessage}</p>
        )}
        <div className="step-two-form-container">
          <input
            type="number"
            name="age"
            id="age"
            onChange={handleAgeInput}
            value={ageValue}
            ref={ageRef}
            placeholder="Age*"
            required
          />
          <button type="submit" className="submit-button">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
