import React, { useState } from 'react'
import ClickCounter from './components/ClickCounter'
import Salary from './components/Salary'
import './App.css'

type Post = {
	title: string,
	likes: number,
}

const App = () => {

	const [msg, setMsg] = useState("Hi mom, I'm stateful")

	const [posts, setPosts] = useState<Post[]>([
		{title: "Reacts Rocks!", likes: 1337},
		{title: "Cool", likes: 7},
		{title: "WHAAAT!", likes: 333},
	])

	// input state
	const [newPostTitle, setnewPostTitle] = useState("")

	const handleAddLike = (post: Post) => {
		post.likes++

		setPosts([...posts])
	}

	const handlePostDelete = (postToDelete: Post) => {
		const newPosts = posts.filter(post => post !== postToDelete )
		setPosts(newPosts)
	}

	const handleFormSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		const newPost: Post = {
			title: newPostTitle,
			likes: 0
		}

		setPosts([...posts, newPost])
	}

	return (
		<div className="App">
			<h1>React Basic</h1>

			<ClickCounter />

			<h2>{msg}</h2>

			<button onClick={ () => {setMsg('hi Dad!') } } className="btn btn-warning btn-lg">Hi dad!</button>

			<hr />


			{/*
			<button className="btn btn-primary" onClick={() => setShowSalary(true)}>Show salary</button>
			<button className="btn btn-primary" onClick={() => setShowSalary(false)}>Hide salary</button>
			*/}

			<Salary />

			<hr />

			<h2>Posts</h2>

			<form onSubmit={handleFormSubmit} className='mb-3'>
				<div className="input-group mb-3">
					<input
					 	type="text"
						className="form-control"
						placeholder='Post Title'
						onChange={(e) => setnewPostTitle(e.target.value)}
						value={newPostTitle}
						required
						/>
					<button type="submit" className="btn btn-primary" onSubmit={() => setnewPostTitle(newPostTitle)}>Create</button>
				</div>
				{newPostTitle.length > 0 && newPostTitle.length < 5 && (
					<div className="form-text text-warning">Title has to be at least 5 chars.</div>
				)}
			</form>

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
