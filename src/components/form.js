import { useState } from "react";

//Component Imports
import NameInput from "./NameInput";
import AgeInput from "./AgeInput";

const Form = () => {
	const [input, setInput] = useState("Hello World");
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
	  console.log(name);
	  // Do Something
	}
	return (
	<div>
		<form onSubmit={submitHandler}>
          <NameInput nameHandler={nameHandler} name={name} />
          {/* <AgeInput/> */}
          {/* <AddressInput/> */}
          {/* <EmailInput/> */}
          {/* <IntraInput/> */}
          {/* <PhoneNumInput/> */}
          <button onClick={tester}>Click Me!</button>
        </form>
	</div> );
}
 
export default Form;