import React from 'react'
import { Link } from 'react-router-dom'

import './App.css'

const App = () => {

	return (
		<div className='app game'>
			<div className="app--box game--box">
				<h1 className="app--box-title">Quizine</h1>
				<p className="app--box-description">
					An unlimited round of five(5) random questions each
				</p>
				<p className="app--box-description low">
					Made with React <br />
					by <a href="https://linkedin.com/in/ishayasolo" className="ishaya">Ishaya Solomon</a>
				</p>
				<Link
					to="/play"
					className="app--box-cta"
					// onClick={initializeQuiz}
				>
					Start Quiz
				</Link>
			</div>
		</div>
	)
}

export default App