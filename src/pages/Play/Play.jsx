import React, { useState, useEffect } from 'react'

import { nanoid } from 'nanoid'

import QnA from '../../components/QnA/QnA'
// import results from '../../data'
import './Play.css'

const Play = () => {
	const [quizzes, setQuizzes] = useState([])
	
	useEffect(() => {
		fetch("https://opentdb.com/api.php?amount=5&type=multiple")
			.then(res => res.json())
			.then(data => {
				const quizzesData = data.results;
				let quizzes = []

				for (let i = 0; i < quizzesData.length; i++) {
					quizzes.push({
						question: quizzesData[i].question,
						correctAnswer: quizzesData[i].correct_answer,
						selectedAnswer: '',
						options: [
							...quizzesData[i].incorrect_answers,
							quizzesData[i].correct_answer
						].sort(() => Math.random() - 0.5)
							.map(option => ({
								id: nanoid(),
								value: option,
								isSelected: false,
							}))
					})
				}

				setQuizzes(quizzes)
			})
	}, [])

	const setSelectedAnswer = (quiz, {target}) => {
		(
			target.className.split(' ')[0] === 'qna--option' &&
			target.className.split(' ')[1] !== 'qna--option-clicked' &&
			target.type === 'submit'
		) ? quiz.selectedAnswer = target.innerText
		: quiz.selectedAnswer = ''

		console.log(quizzes)
	}
	
	return (
		<div className="play game">
			<div className='play--box game--box'>
				{quizzes.map( quiz => 
					<QnA
					key={nanoid()}
					quizData={quiz}
					correctAnswer={quiz.correctAnswer}
					setSelectedAnswer={event => setSelectedAnswer(quiz, event)}
					/>
				)}
				<button
					className="play--validator"
				>
					Check Answers
				</button>
			</div>
		</div>
	)
}

export default Play