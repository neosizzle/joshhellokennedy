import { useState } from "react";
import "./App.css";

//Component Imports
import Form from "./components/form";
import Tnc from "./components/tnc";

const TNC_STEP = 0;
const FORM_STEP = 1;

function App() {
  const [step, setStep] = useState(TNC_STEP);
  return (
    <div className="App">
      {
        step === TNC_STEP ? 
        <Tnc setStep={setStep} nextStep = {FORM_STEP}/>
        :
        step === FORM_STEP ? 
        <Form/>
        :
        <></>
      }
    </div>
  );
}

export default App;
