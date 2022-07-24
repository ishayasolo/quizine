import { useState } from 'react'

import './App.css';
import Play from './components/Play/Play';

const App = () => {
	const [play, setPlay] = useState(false);

	return (
		!play ? <div className='app game'>
			<div className="app--box game--box">
				<h1 className="app--box-title">Quizine</h1>
				<p className="app--box-description">
					An unlimited round of five(5) random questions each
				</p>
				<p className="app--box-description low">
					Made with React <br />
					by <a href="https://linkedin.com/in/ishayasolo" className="ishaya">Ishaya Solomon</a>
				</p>
				<button
					className="app--box-cta"
					onClick={() => setPlay(play => !play)}
				>
					Start Quiz
				</button>
			</div>
		</div> : <Play />
	)
}

export default App
