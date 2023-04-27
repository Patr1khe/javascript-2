import { useState } from 'react'

const ClickCounter = () => {
	const [msg, setMsg] = useState("Hi mom, I'm stateful")
	const [count, setCount] = useState(0)

	const handleButtonClick = () => {
		setMsg("Bye mom")
		setCount( (prevClicks) => { return prevClicks + 1 } )
		// setCount(count +1)
		console.log("clicks",count +1)
	}


	return (
		<div>
			<h2>Click Counter</h2>
			<p>You have clicked the button {count} times</p>

			<button onClick={handleButtonClick} className="btn btn-success btn-lg">⇲me!</button>
		</div>
	)
}

export default ClickCounter
