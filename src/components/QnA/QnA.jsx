import React, { useState } from 'react';

import './QnA.css';

const QnA = (props) => {
	const [quiz, setQuiz] = useState(props.quizData);

	const setSelectedAnswer = (options) => {
		let answer = null

		for (let i = 0; i < options.length; i++) {
			if (options[i].isSelected)
				answer = options[i].value
		}

		return answer;
	}

	const toggleIsSelected = id => {
		setQuiz(quiz => ({
			...quiz,
			options: quiz.options.map(option => (option.id === id ? {
				...option,
				isSelected: !option.isSelected,
			} : {
				...option,
				isSelected: false,
			})),
			selectedAnswer: setSelectedAnswer(quiz.options)
		}));
	}

	return (
		<div className='qna'>
			<p
				className='qna--question'
				dangerouslySetInnerHTML={{__html: quiz.question}}
			/>
			<div className="qna--options">
				{quiz.options.map(option =>
					<button
						key={option.id}
						id={option.id}
						className={`qna--option ${option.isSelected && 'qna--option-clicked'}`}
						onClick={() => toggleIsSelected(option.id)}
						dangerouslySetInnerHTML={{__html: option.value}}
					/>
				)}
			</div>
		</div>
	);
}

export default QnA
