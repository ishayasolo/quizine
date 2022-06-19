import React, { useState, useEffect } from 'react'

import { nanoid } from 'nanoid'

import QnA from '../../components/QnA/QnA'
// import results from '../../data'
import './Play.css'

const Play = () => {	
	const [quizzes, setQuizzes] = useState([])
	const [gameRounds, setGameRounds] = useState(1)
	
	useEffect(() => {
		fetch("https://opentdb.com/api.php?amount=5&type=multiple")
			.then(res => res.json())
			.then(data => setQuizzes(data.results))
	}, [gameRounds])
	
	return (
		<div className="play game">
			<div className='play--box game--box'>
				{quizzes.map( quiz => 
					<QnA
						key={nanoid()}
						question={quiz.question}
						correct_answer={quiz.correct_answer}
						incorrect_answers={quiz.incorrect_answers}
					/>
				)}
			</div>
		</div>
	)
}

export default Play