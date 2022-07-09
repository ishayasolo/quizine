import React, { useState, useEffect } from 'react'

import { nanoid } from 'nanoid'

import QnA from '../../components/QnA/QnA'
import quizzesData from '../../data'
import './Play.css'

const Play = () => {
	const initializeQuizzes = (quizzesData) => {
		let quizzes = [];

		for (let i = 0; i < quizzesData.length; i++) {
			quizzes.push({
				question: quizzesData[i].question,
				correctAnswer: quizzesData[i].correct_answer,
				selectedAnswer: null,
				options: [
					...quizzesData[i].incorrect_answers,
					quizzesData[i].correct_answer
				].sort(() => Math.random() - 0.5).map(option => ({
						id: nanoid(),
						value: option,
						isSelected: false,
					}))
			})
		}

		return quizzes;
	}

	const [quizzes, setQuizzes] = useState(initializeQuizzes(quizzesData));

	// const [quizzes, setQuizzes] = useState([])

	// useEffect(() => {
	// 	fetch("https://opentdb.com/api.php?amount=5&type=multiple")
	// 		.then(res => res.json())
	// 		.then(data => initializeQuizzes(data))
	// }, [])

	// const setSelectedAnswer = (quiz, {target}) => {
	// 	(
	// 		target.className.split(' ')[0] === 'qna--option' &&
	// 		target.className.split(' ')[1] !== 'qna--option-clicked' &&
	// 		target.type === 'submit'
	// 	) ? quiz.selectedAnswer = target.innerText
	// 		: quiz.selectedAnswer = ''

	// 	console.log(quizzes)
	// }

	const validateAnswers = () => {}

	return (
		<div className="play game">
			<div className='play--box game--box'>
				{quizzes.map(quiz =>
					<QnA
						key={nanoid()}
						quizData={quiz}
					/>
				)}
				<button
					className="play--validator"
					onClick={validateAnswers}
				>
					Check Answers
				</button>
			</div>
		</div>
	)
}

export default Play
