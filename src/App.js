import logo from './logo.svg';
import './App.css';
import { useState } from "react"

function App() {
  const [ input, setInput ] = useState('Hello World')

  function onChangeHandler (e) {
    setInput(e.target.value)
  }

  function onClickHandler (e) {
    e.preventDefault()
    console.log(input)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. This is my branch bishes....
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
        <form>
          <label htmlFor="this">This is for form: </label>
          <input id="this" value={input} onChange={onChangeHandler}/>
          <button onClick={onClickHandler}>Click me!</button>
        </form>
      </header>
    </div>
  );
}

export default App;
