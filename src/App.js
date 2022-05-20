import { useEffect, useState } from "react";
import "./App.css";

function App() {

const [counter, setCounter] = useState(1)

	useEffect(()=>{
document.querySelector("title").innerHTML = `Count (${counter})`

	},[counter])



function handleClick () {
	setCounter(counter+1)
}

  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          Edit the <code>./src</code> folder to add components.
		  <button onClick={handleClick}>Count ({counter})</button>
        </div>
      </div>
    </div>
  );
}

export default App;
