import { useState } from 'react'
import './App.css'

const App = () => {

	const [msg, setMsg] = useState("Hi mom, I'm stateful")
	const [count, setCount] = useState(0)

	const handleButtonClick = () => {
		setMsg("Bye mom")
		setCount(count +1)
		console.log("clicks",count +1)
	}


	return (
		<div className="App">
			<h1>React Basic</h1>

			<h2>{msg}</h2>

			<p>You have clicked the button {count} times</p>

			<button onClick={handleButtonClick} className="btn btn-success btn-lg">⇲me!</button>
		</div>
	)
}

export default App
