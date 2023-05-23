import { useEffect, useState } from 'react'
import { IResource } from './types'
import { getResource } from './services/API'
import './assets/scss/App.scss'
import ResourceList from './components/ResourceList'


function App() {
	const [resource, setResource] = useState('')
	const [data, setData] = useState<IResource[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')

	useEffect(() => {
		const fetchData = async () => {
			if (!resource) {
				return
			}

			// empty data before fetching new
			// and set loading
			setData([])
			setIsLoading(true)

			try {
				const payload = await getResource(resource)

				// update data state with resource payload
				setData(payload)
				setIsLoading(false)

			} catch (e: any) {
				setIsLoading(false)
				setError(e.toString())
			}
		}
		fetchData()
	}, [resource])

	return (
		<div className="container">
			<h1 className="mb-3">Fetch</h1>

			<div className="d-flex justify-content-between">
				<button onClick={() => setResource('albums')} className="btn btn-primary">Albums</button>
				<button onClick={() => setResource('photos')} className="btn btn-success">Photos</button>
				<button onClick={() => setResource('posts')} className="btn btn-warning">Posts</button>
				<button onClick={() => setResource('todos')} className="btn btn-danger">Todos</button>
				<button onClick={() => setResource('memes')} className="btn btn-info">Memes 😂</button>
			</div>

			<ResourceList
				error={error}
				isLoading={isLoading}
				resource={resource}
				data={data}
			/>
		</div>
	)
}

export default App
