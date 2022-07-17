import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid';

import QnA from '../QnA/QnA';
import quizzesData from '../data';
import './Play.css';

const Play = () => {
	const [quizzes, setQuizzes] = useState([]);
	// const [score, setScore] = useState(0);

	const initializeQuizzes = (quizzesData) => {
		let quizzes = [];

		for (let i = 0; i < quizzesData.length; i++) {
			quizzes.push({
				id: nanoid(),
				question: quizzesData[i].question,
				options: [
					...quizzesData[i].incorrect_answers,
					quizzesData[i].correct_answer
				].sort(() => Math.random() - 0.5).map(option => ({
					id: nanoid(),
					value: option,
					isSelected: false,
					// isCorrect: (option === quizzesData[i].correct_answer) ? true : false,
				})),
				correctAnswer: quizzesData[i].correct_answer,
				selectedAnswer: null,
			})
		}

		return quizzes;
	}

	useEffect(() => {
		setQuizzes(initializeQuizzes(quizzesData))
	}, []);

	// useEffect(() => {
	// 	fetch("https://opentdb.com/api.php?amount=5&type=multiple")
	// 		.then(res => res.json())
	// 		.then(data => initializeQuizzes(data))
	// }, []);

	const toggleIsSelected = (id, quizId) => {
		quizzes.map(quiz => (quiz.id === quizId && setQuizzes(quizzes => quizzes.map(quiz => ({
			...quiz,
			options: quiz.options.map(option => (option.id === id ? {
				...option,
				isSelected: !option.isSelected,
			} : option)),
		})))));
	}

	const validateAnswers = () => {}

	return (
		<div className="play game">
			<div className='play--box game--box'>
				{quizzes.map(quiz =>
					<QnA
						key={quiz.id}
						quizId={quiz.id}
						quizData={quiz}
						toggleIsSelected={toggleIsSelected}
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
	);
}

export default Play
