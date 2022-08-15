import { useContext, useState, useEffect, useRef } from "react";
import "../../styles/forms.css";
import "./StepOneForm.css";
import { UserContext } from "../../context/UserContext";
import BeatLoader from "react-spinners/BeatLoader";
import { determineTheGender } from "../../Apis/GenderApiFunctions";

export default function StepOneForm(props) {
  //context _______________________________________________________________________________
  const { user, setUser } = useContext(UserContext);

  //ref ___________________________________________________________________________________
  const firstnameRef = useRef();
  //states ________________________________________________________________________________
  const [errorMessage, setErrorMessage] = useState(null);
  const [loadingResponseApi, setLoadingResponseApi] = useState(false);
  const [lastnameValue, setLastnameValue] = useState("");
  const [firstnameValue, setFirstnameValue] = useState("");

  //effects _______________________________________________________________________________
  useEffect(() => {
    if (user) {
      setFirstnameValue(user.firstname);
      setLastnameValue(user.lastname);
    }

    return firstnameRef.current.focus();
  }, [user]);

  // variables __________________________________________________________________________
  const { setFormToDisplay } = props;
  const loader = (
    <BeatLoader color="silver" loading={loadingResponseApi} size={10} />
  );

  // functions ____________________________________________________________________________

  function firstLetterCase(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (lastnameValue === "" || firstnameValue === "") {
      return setErrorMessage("Please, complete all inputs");
    } else if (user === null || user.firstname !==firstnameValue) {
      setErrorMessage(null);
      setLoadingResponseApi(true)
      const genderAndProbability = await determineTheGender(firstnameValue);
      setUser({
        ...user,
        firstname: firstLetterCase(firstnameValue),
        lastname: firstLetterCase(lastnameValue),
        gender: firstLetterCase(genderAndProbability.gender),
        probability: genderAndProbability.probability,
      });
      setLoadingResponseApi(false)
      return setFormToDisplay(1);
    } else {
      setUser({
        ...user,
        lastname: lastnameValue,
      });
      return setFormToDisplay(1);
    }
  };

  const handleFirstnameInput = (e) => {
    setErrorMessage(null);
    setFirstnameValue(e.target.value);
  };

  const handleLastnameInput = (e) => {
    setErrorMessage(null);
    setLastnameValue(e.target.value);
  };

  return (
    <div className="stepe-one-form">
      <form className="forms" onSubmit={handleSubmit} id="name-form">
        {setErrorMessage !== null && (
          <p className="error-message">{errorMessage}</p>
        )}
        <input
          type="text"
          name="firstname"
          id="firstname"
          onChange={handleFirstnameInput}
          ref={firstnameRef}
          placeholder="Firstname*"
          value={firstnameValue}
          required
        />
        <input
          type="text"
          name="lastname"
          id="lastname"
          onChange={handleLastnameInput}
          placeholder="Lastname*"
          value={lastnameValue}
          required
        />
      </form>
      <button className="submit-button" form="name-form">
        {loadingResponseApi ? loader : "Next"}
      </button>
    </div>
  );
}
