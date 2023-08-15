import './assets/scss/App.scss'
import { Container } from 'react-bootstrap'
import Navigation from './pages/partials/Navigation'

function App() {

  return (
    <>
		<div id="App">
			<Navigation />

			<Container className="py-3">
				<h1>react</h1>
			</Container>

		</div>
    </>
  )
}

export default App
