import { useContext } from "react";
import "../../styles/forms.css";
import "./Result.css";
import { UserContext } from "../../context/UserContext";
import { FaRegAddressCard } from 'react-icons/fa';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';

export default function Result() {
  //context _______________________________________________________________________________
  const { user } = useContext(UserContext);

  // variables ____________________________________________________________________________
  const { firstname, lastname, gender, age } = user;

  // functions ___________________________________________________________________________
      const iconGenderGenerator = (gender) => {
          if(gender === "Female"){
            return  <BsGenderFemale size={25} color="silver"/>
          }else {
            return <BsGenderMale size={25} color="silver"/>
          }
      }
  return (
    <div className="result">
        <FaRegAddressCard size={50} color="silver"/>
      <ul>
        <li>
          <h5>{firstname} {lastname}</h5>
        </li>
        <li>
          <span className="label-list-result">Gender</span> 
          <div className="gender-items"><h5>{gender}</h5> {iconGenderGenerator(gender)}</div> 
        </li>
        <li>
          <span className="label-list-result">Age</span> <h5>{age} years</h5>
        </li>
      </ul>
    </div>
  );
}
