import { useState } from 'react'
import './App.css'

type Post = {
	id: number,
	title: string,
	likes: number,
}

const App = () => {

	const [msg, setMsg] = useState("Hi mom, I'm stateful")
	const [count, setCount] = useState(0)
	const [salary, setSalary] = useState(10)

	const [posts, setPosts] = useState<Post[]>([
		{id: 1, title: "Reacts Rocks!", likes: 1337},
		{id: 2, title: "Cool", likes: 7},
		{id: 3, title: "WHAAAT!", likes: 333},
	])

	const handleButtonClick = () => {
		setMsg("Bye mom")
		setCount(count +1)
		console.log("clicks",count +1)
	}

	const handleChangeSalary = (amount: number) => {
		if (salary + amount < 5) {
			setSalary(5)
			return
		}
		setSalary(salary + amount)
	}


	return (
		<div className="App">
			<h1>React Basic</h1>

			<h2>{msg}</h2>

			<p>You have clicked the button {count} times</p>

			<button onClick={handleButtonClick} className="btn btn-success btn-lg">⇲me!</button>
			<button onClick={ () => {setMsg('hi Dad!') } } className="btn btn-warning btn-lg">Hi dad!</button>

			<hr />

			<p>Salary per hour: {salary} &euro;</p>

			{salary < 10 && (
				<div className="alert alert-warning">You might want to change job?</div>
			)}

			<div className="buttons">
				<div className="mb-1">
					<button
						className="btn btn-primary btn-lg"
						onClick={() => { handleChangeSalary(1) }}
					>Raise 1 &euro; 🤑</button>
					<button
						className="btn btn-warning btn-lg"
						onClick={() => { handleChangeSalary(-1) }}
					>Decrease 1 &euro; 😢</button>
				</div>

				<div className="mb-1">
					<button
						className="btn btn-success btn-lg"
						onClick={() => { handleChangeSalary(5) }}
					>Raise 5 &euro; 🤑🤑🤑</button>
					<button
						className="btn btn-danger btn-lg"
						onClick={() => { handleChangeSalary(-5) }}
					>Decrease 5 &euro; 😢😢😢</button>
				</div>
			</div>

			<hr />

			<h2>Posts</h2>

			<ul>
				{
					posts.map( (post, index) => (
						<li key={index}>
							{post.title} ({post.likes} likes)
						</li>
					))
				}
			</ul>

		</div>
	)
}

export default App
