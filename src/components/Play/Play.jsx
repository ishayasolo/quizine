import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid';

// import quiz from '../../data';
import QuestionAndOptions from '../QuestionAndOptions/QuestionAndOptions';
import './Play.css';
import Confetti from 'react-confetti';

const Play = () => {
	const [quiz, setQuiz] = useState([])
	const [score, setScore] = useState(0)
	const [checkedQuestions, setCheckedQuestions] = useState(0)
	const [isChecked, setIsChecked] = useState(false)
	const [startOver, setStartOver] = useState(false)

	const customQuizData = ({ results }) => {
		let quiz = [];

		results.forEach(item => {
			quiz.push({
				id: nanoid(),
				question: item.question,
				options: [
					...item.incorrect_answers,
					item.correct_answer
				].sort(() => Math.random() - 0.5).map(option => ({
					id: nanoid(),
					value: option,
					isSelected: false,
					isCorrectAnswer: option === item.correct_answer,
					isRightChoice: false,
					isWrongChoice: false,
					isChecked: false,
				})),
				correctAnswer: item.correct_answer,
				selectedAnswer: null,
			})
		})

		return quiz
	}

	useEffect(() => {
		fetch("https://opentdb.com/api.php?amount=5&type=multiple")
			.then(res => res.json())
			.then(data => setQuiz(customQuizData(data)))
	}, [startOver]);

	console.log(quiz);

	const toggleIsSelected = (optionId, questionId) => {
		setQuiz(quiz => quiz.map(question => {
			return (question.id === questionId) ? {
				...question,
				options: question.options.map(option => {
					return (option.id === optionId) ? {
						...option,
						isSelected: !option.isSelected,
						isRightChoice: option.isSelected && option.isCorrectAnswer,
						isWrongChoice: option.isSelected && !option.isCorrectAnswer ? true : false,
					} : {
						...option,
						isSelected: false,
					}
				}),
			} : question
		}))
	}

	const validateAnswers = () => {
		setQuiz(quiz => quiz.map(question => ({
			...question,
			options: question.options.map(option => {
				if (option.isSelected && option.isCorrectAnswer) {
					setScore(score => score + 1)
					return {
						...option,
						isRightChoice: true,
						isChecked: true,
					}
				} else if (option.isSelected && !option.isCorrectAnswer) {
					return {
						...option,
						isWrongChoice: true,
						isChecked: true,
					}
				} else {
					return {
						...option,
						isChecked: true,
					}
				}
			})
		})))
		setIsChecked(true)

		quiz.forEach(question => question.options.filter(option => option.isChecked))
	}

	return (
		<div className="play game">
			<div className='play--box game--box'>
				{quiz.map(question =>
					<QuestionAndOptions
						key={question.id}
						questionId={question.id}
						questionData={question}
						toggleIsSelected={toggleIsSelected}
						isChecked={isChecked}
					/>
				)}
				{isChecked ?
				<div className='score-display'>
					<p className="score-display--text">You scored {score}/{quiz.length} correct answers</p>
					<button className="play-again" onClick={() => setStartOver(true)}>Play again</button>
				</div> :
				<button
					className={`play--validator ${checkedQuestions < 5 && 'check-disabled'}`}
					onClick={validateAnswers}
				>
					Check Answers
				</button>}
			</div>
			{score === 5 && isChecked && <Confetti />}
		</div>
	);
}

export default Play
