import {useState} from 'react';
import "./styles/App.css"
import StepOneForm from './components/StepOneForm';
import StepTwoForm from './components/StepTwoForm';
import Result from './components/Result'
import { BsArrowLeftSquareFill } from 'react-icons/bs';
import Logo from './components/Logo';





function App() {

//states _______________________________________________________________________________
  const [formToDisplay, setFormToDisplay] = useState(0)

//functions ____________________________________________________________________________
  const titleGenerator= (form) =>{
    switch (form) {
    case 0:
      return "1/3 What is your name ?"
      
    case 1:
     return "2/3 How old are you ?"
    
    case 2:
     return "3/3 Nice to meet you"

     default:
      return
  
  }
}

const backStep =() => {
  formToDisplay>0&& setFormToDisplay(formToDisplay-1)
}


  return (
    <div className="App">
   
      <div className="forms-container">
      <Logo/>
     { formToDisplay>0&& <BsArrowLeftSquareFill size={40} color="silver" className="back-button" onClick ={backStep}/>}
        <h1 className='title-form'>{titleGenerator(formToDisplay)}</h1>
        { formToDisplay===0&& <StepOneForm setFormToDisplay={setFormToDisplay}/> }
        { formToDisplay===1&& <StepTwoForm setFormToDisplay={setFormToDisplay}/> }
        { formToDisplay===2&& <Result setFormToDisplay={setFormToDisplay}/> }
      </div>

    </div>
  );
}

export default App;
