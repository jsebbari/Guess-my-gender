import { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "../../context/UserContext";
import "../../styles/forms.css";
import "./StepOneForm.css";
import { determineTheGender } from "../../Apis/GenderApiFunctions";
import { firstLetterCase } from "./functions/stepOneFunctions";
import BeatLoader from "react-spinners/BeatLoader";

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

  const handleChangeFirstnameInput = (e) => {
    setErrorMessage(null);
    setFirstnameValue(e.target.value);
  };

  const handleChangeLastnameInput = (e) => {
    setErrorMessage(null);
    setLastnameValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (lastnameValue === "" || firstnameValue === "") {
        return setErrorMessage("Please, complete all inputs");
      } else if (
        user === null ||
        user.firstname !== firstLetterCase(firstnameValue)
      ) {
        setErrorMessage(null);
        setLoadingResponseApi(true);
        const genderAndProbability = await determineTheGender(firstnameValue);
        setUser({
          ...user,
          firstname: firstLetterCase(firstnameValue),
          lastname: firstLetterCase(lastnameValue),
          gender: firstLetterCase(genderAndProbability.gender),
          probability: genderAndProbability.probability,
        });
        setLoadingResponseApi(false);
        return setFormToDisplay(1);
      } else {
        setUser({
          ...user,
          lastname: firstLetterCase(lastnameValue),
        });
        return setFormToDisplay(1);
      }
    } catch (error) {
      setLoadingResponseApi(false);
      setErrorMessage("Oups, we don't find this firstname, try again please");
    }
  };

  return (
    <div className="stepe-one-form">
      <form className="forms" onSubmit={handleSubmit} id="name-form">
        <input
          type="text"
          name="firstname"
          id="firstname"
          onChange={handleChangeFirstnameInput}
          ref={firstnameRef}
          placeholder="Firstname*"
          value={firstnameValue}
          required
        />
        <input
          type="text"
          name="lastname"
          id="lastname"
          onChange={handleChangeLastnameInput}
          placeholder="Lastname*"
          value={lastnameValue}
          required
        />
      </form>
      {setErrorMessage !== null && (
        <p className="error-message">{errorMessage}</p>
      )}
      <button className="submit-button" form="name-form">
        {loadingResponseApi ? loader : "Next"}
      </button>
    </div>
  );
}
