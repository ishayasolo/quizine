import React, { useState } from 'react'

import { nanoid } from 'nanoid'

import './QnA.css'

const QnA = ({
	quizData,
	setSelectedAnswer
}) => {
	const [quiz, setQuiz] = useState(quizData)

	const toggleIsSelected = (event, id) => {
		setQuiz(quiz => ({
			...quiz,
			options: quiz.options.map(option => {
				return option.id === id ? {
					...option,
					isSelected: !option.isSelected
				} : {
					...option,
					isSelected: false
				}
			}),
		}))
	}

	return (
		<div className='qna'>
			<p
				className='qna--question'
				dangerouslySetInnerHTML={{__html: quiz.question}}
			/>
			<div
				className="qna--options"
				onClick={setSelectedAnswer}
			>
				{quiz.options.map(option => 
					<button
						key={nanoid()}
						className={`qna--option ${option.isSelected && 'qna--option-clicked'}`}
						onClick={(event) => toggleIsSelected(event, option.id)}
						dangerouslySetInnerHTML={{__html: option.value}}
					/>
				)}
			</div>
		</div>
	)
}

export default QnA