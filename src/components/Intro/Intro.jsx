import './Intro.css'

const Intro = ({ setPlay }) => (
	<div className='game'>
		<div className="intro--box game--box">
			<h1 className="intro--box-title">Quizine</h1>
			<p className="intro--box-description">
				An unlimited round of five(5) random questions each
			</p>
			<p className="intro--box-description low">
				Made with React <br />
				by <a href="https://linkedin.com/in/ishayasolo" className="ishaya">Ishaya Solomon</a>
			</p>
			<button
				className="intro--box-cta"
				onClick={() => setPlay(true)}
			>
				Start Quiz
			</button>
		</div>
	</div>
)

export default Intro
