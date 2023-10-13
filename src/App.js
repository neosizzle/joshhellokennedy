import "./App.css";
import { useState } from "react";

//Component Imports
import NameInput from "./components/NameInput";
import AgeInput from "./components/AgeInput";

function App() {
  const [input, setInput] = useState("Hello World");
  const [name, setName] = useState("");
  const [bool, setBool] = useState(0);

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
    setBool(bool => bool + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={submitHandler}>
          <p>{bool}</p>
          <NameInput nameHandler={nameHandler} name={name} />
          {/* <AgeInput/> */}
          {/* <AddressInput/> */}
          {/* <EmailInput/> */}
          {/* <IntraInput/> */}
          {/* <PhoneNumInput/> */}
          <button onClick={tester}>Click Me!</button>
        </form>
      </header>
    </div>
  );
}

export default App;
