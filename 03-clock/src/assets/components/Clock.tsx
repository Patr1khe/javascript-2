import { useEffect, useState } from 'react'

export const Clock = () => {
	const [time, setTime] = useState(() => {
		console.log("I'm initing")
		return new Date().toLocaleTimeString()
	})

	useEffect(() => {
		// This will only be executed when the component is mounted,
		// and only AFTER the component has been rendered
		console.log("starting clock ....")

		const interValId= setInterval(() => {
			setTime(new Date().toLocaleTimeString())
			console.log("tick")
		}, 1000)

		return () => {
			// This will be executed when the component
			// is about to be unmounted
			console.log("Stopping clock...")
			clearInterval(interValId)
		}
	}, [])

	useEffect(() => {
		document.title = time
	}, [time])

	return (
			<div className="display-1 text-center">
				{time}
			</div>
	)
}

export default Clock

