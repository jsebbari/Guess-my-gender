import {useState} from 'react';
import "./styles/App.css"
import StepOneForm from './components/StepOneForm';
import StepTwoForm from './components/StepTwoForm';
import Result from './components/Result'
import { BsArrowLeftSquareFill } from 'react-icons/bs';
import ProgressBar from "@ramonak/react-progress-bar";


function App() {

//states _______________________________________________________________________________
  const [formToDisplay, setFormToDisplay] = useState(0)

//functions ____________________________________________________________________________
  const titleGenerator= (form) =>{
    switch (form) {
    case 0:
      return "What is your name ?"
      
    case 1:
     return "How old are you ?"
    
    case 2:
     return "Nice to meet you"

     default:
      return
  
  }
}

const backStep =() => {
  formToDisplay>0&& setFormToDisplay(formToDisplay-1)
}

const progressBarSetting =(tab) => {
  if(tab === 1){
     return <ProgressBar completed={50} className="progress-bar" bgColor="#79142a6d" labelColor="black"/>;
    }
    else if (tab === 2){
    return  <ProgressBar completed={100} className="progress-bar" bgColor="#79142a6d" labelColor="black"/>;}
}


  return (
    <div className="App">
      <div className="forms-container">
     { formToDisplay>0&& <BsArrowLeftSquareFill size={40} color="silver" className="back-button" onClick ={backStep}/>}
        <h1 className='title-form'>{titleGenerator(formToDisplay)}</h1>
        {progressBarSetting(formToDisplay)}
        { formToDisplay===0&& <StepOneForm setFormToDisplay={setFormToDisplay}/> }
        { formToDisplay===1&& <StepTwoForm setFormToDisplay={setFormToDisplay}/> }
        { formToDisplay===2&& <Result setFormToDisplay={setFormToDisplay}/> }
       
      </div>
     
    </div>
  );
}

export default App;
