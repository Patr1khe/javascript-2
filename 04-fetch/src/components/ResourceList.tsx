import React from 'react'
import { IResource } from '../types'

interface IProps {
	error: string
	isLoading: boolean
	resource: string
	data: IResource[]
}

const ResourceList: React.FC<IProps> = ({ error, isLoading, resource, data }) => {

	if (isLoading) {
		return <p>Loading...</p>
	}

	if (error) {
		return <p>{error}</p>
	}

	return (
		<>
			{error && <p>{error}</p>}

			{isLoading && <p>Loading...</p>}

			{!isLoading && !error && resource && data.length > 0 && (
				<>
					<h2>{resource}</h2>
					<p>There are {data.length} {resource}.</p>
					<ol>
						{data.map(item => (
							<li key={item.id}>{item.title}</li>
						))}
					</ol>
				</>
			)}
		</>
	)
}

export default ResourceList
