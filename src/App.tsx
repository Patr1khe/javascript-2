import React, { FC, useState } from 'react'
import { ReactDOM } from 'react'
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
	const [showSalary, setShowSalary] = useState(false)

	const [posts, setPosts] = useState<Post[]>([
		{id: 1, title: "Reacts Rocks!", likes: 1337},
		{id: 2, title: "Cool", likes: 7},
		{id: 3, title: "WHAAAT!", likes: 333},
	])

	const handleButtonClick = () => {
		setMsg("Bye mom")
		setCount( (prevClicks) => { return prevClicks + 1 } )
		// setCount(count +1)
		console.log("clicks",count +1)
	}

	const handleChangeSalary = (amount: number) => {
		if (salary + amount < 5) {
			setSalary(5)
			return
		}
		setSalary(salary + amount)
	}

	const handleAddLike = (post: Post) => {
		post.likes++

		setPosts([...posts])
	}

	const handlePostDelete = (postToDelete: Post) => {
		const newPosts = posts.filter(post => post !== postToDelete )
		setPosts(newPosts)
	}

	return (
		<div className="App">
			<h1>React Basic</h1>

			<h2>{msg}</h2>

			<p>You have clicked the button {count} times</p>

			<button onClick={handleButtonClick} className="btn btn-success btn-lg">⇲me!</button>
			<button onClick={ () => {setMsg('hi Dad!') } } className="btn btn-warning btn-lg">Hi dad!</button>

			<hr />

			{/*
			<button className="btn btn-primary" onClick={() => setShowSalary(true)}>Show salary</button>
			<button className="btn btn-primary" onClick={() => setShowSalary(false)}>Hide salary</button>
			*/}
			<button className="btn btn-primary" onClick={() => setShowSalary(!showSalary)}>
				{showSalary ? "Hide salary" : "Show salary"}
			</button>


			{showSalary && (
				<>
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
				</>
			)}
			<hr />

			<h2>Posts</h2>

			{posts.length > 0 && (
				<ul>
					{
						posts.map( (post, index) => (
							<li key={index}>
								{post.title} ({post.likes} likes)
								<button
									className="btn btn-success btn-sm ms-1"
									onClick={() => handleAddLike(post)}
								>❤️</button>
								<button
									className="btn btn-danger btn-sm ms-1"
									onClick={() => handlePostDelete(post)}
								>🗑️</button>
							</li>
						))
					}
				</ul>
			)}

			{posts.length === 0 && (<p>These are not the posts you're looking for</p>)}
		</div>
	)
}

export default App
