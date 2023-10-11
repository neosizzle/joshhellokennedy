import logo from './logo.svg';
import './App.css';
import { useState } from "react"

function App() {
  const [ input, setInput ] = useState('Hello World')

  function inputHandler (e) {
    setInput(e.target.value)
  }

  const [ name, setName ] = useState('')

  function nameHandler (e) {
    setName(e.target.value)
    console.log(name)
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
          Edit <code>src/App.js</code> and save to reload. 
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
          <input id="this" value={input} onChange={inputHandler}/>
          <button onClick={onClickHandler}>Click me!</button>
        </form>
        <label>
          Please select your name: 
          <select value={input} onChange={nameHandler}>
            <option value="Jya Xuen">Jya Xuen</option>
            <option value="Jun Han">Jun Han</option>
            <option value="Alex">Alex</option>
          </select>
          <select value={input} onChange={nameHandler}>
            <option value="Jya Xuen">Jya Xuen</option>
            <option value="Jun Han">Jun Han</option>
            <option value="Alex">Alex</option>
          </select>
          <button onClick={onClickHandler}>Submit</button>
        </label>
      </header>
    </div>
  );
}

export default App;