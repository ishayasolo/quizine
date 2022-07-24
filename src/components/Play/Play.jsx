// import { useState, useEffect } from 'react'
import QnA from '../Question/Question';
import { useSelector } from 'react-redux';
import './Play.css';

const Play = () => {
	// const [revealAnswers, setRevealAnswers] = useState(false);

	// useEffect(() => {
	// 	setQuiz(initializeQuiz(quizData))
	// }, []);

	// useEffect(() => {
	// 	fetch("https://opentdb.com/api.php?amount=5&type=multiple")
	// 		.then(res => res.json())
	// 		.then(data => initializequiz(data))
	// }, []);

	// const holdAnswer = (questionId, optionId) => {
	// 	setQuiz(quiz => quiz.map(question => (
	// 		question.id === questionId ? {
	// 			...question,
	// 			options: question.options.map(option => (option.id === optionId ? {
	// 				...option,
	// 				isSelected: !option.isSelected,
	// 			} : {
	// 				...option,
	// 				isSelected: false,
	// 			})),
	// 		} : question
	// 	)));
	// }

	// const validateAnswers = () => setQuiz(quiz => quiz.map(question => ({
	// 	...question,
	// 	options: question.options.map(option => {
	// 		if (option.isSelected && option.isCorrect)
	// 			return {
	// 				...option,
	// 				isRightChoice: true,
	// 				isChecked: true
	// 			}
	// 		else if (option.isSelected && !option.isCorrect)
	// 			return {
	// 				...option,
	// 				isWrongChoice: true,
	// 				isChecked: true
	// 			}
	// 		else
	// 			return {
	// 				...option,
	// 				isChecked: true
	// 			}
	// 	})
	// })));

	const quiz = useSelector(state => state.quiz.quizQuestions);

	return (
		<div className="play game">
			<div className='play--box game--box'>
				{quiz.map(question =>
					<QnA
						key={question.id}
						question={question}
						questionId={question.id}
					/>
				)}
				<button
					className="play--validator"
					onClick={() => {}}
				>
					Check Answers
				</button>
			</div>
		</div>
	);
}

export default Play
