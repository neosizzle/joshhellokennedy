import { useState } from "react";

//Component Imports
import NameInput from "./NameInput";
import AgeInput from "./AgeInput";
import CountryInput from "./CountryInput"
import EmailInput from "./EmailInput"

const Form = () => {
	const [name, setName] = useState("");
	const [bool, setBool] = useState(false);
  
	function nameHandler(e) {
	  const selectedValue = e.target.value;
	  if (selectedValue === "back") {
		// Handle the backspace option: remove the last character from the name.
		const updatedName = name.slice(0, -1);
		setName((name) => updatedName);
	  } else {
		setName((name) => name + selectedValue);
	  }
	}
  
	function submitHandler(e) {
	  e.preventDefault();
	  // Do Something
	}
  
	function tester(e) {
	  e.preventDefault();
	  if (name) {
		setBool(1);
	  	console.log(name);
	  }
	}

	return (
	<div>
		<form onSubmit={submitHandler}>
          <NameInput nameHandler={nameHandler} name={name} tester={tester} />
          <AgeInput/>
          <CountryInput/>
          <EmailInput/>
          {/* <IntraInput/> */}
          {/* <PhoneNumInput/> */}
        </form>
	</div> );
}
 
export default Form;