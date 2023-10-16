import { useState } from "react";

//Component Imports
import NameInput from "./NameInput";
import AgeInput from "./AgeInput";
import CountryInput from "./CountryInput"
import EmailInput from "./EmailInput"
import HpInput from "./HpInput"
import Ads from './YourAds'
import Trivia from './Trivia'

const Form = () => {
	const [name, setName] = useState("");
	const [bool, setBool] = useState(false);
  
	function nameHandler(e) {
	  const selectedValue = e.target.value;
	  if (selectedValue === "back") {
		// Handle the backspace option: remove the last character from the name.
		const updatedName = name.slice(0, -1);
		setName(updatedName);
	  } else {
		setName((name) => name + selectedValue);
	  }
	}
  
	function submitHandler(e) {
	  alert('submit')
	  // Do Something
	}


	return (
	<div>

		<NameInput nameHandler={nameHandler} name={name} />
		<AgeInput/>
		<CountryInput/>
		<EmailInput/>
		{/* <IntraInput/> */}
		<HpInput/>
		{/* <Ads/> */}

		<button onClick={submitHandler}>
			SUBMIT
		</button>


	</div> );
}
 
export default Form;