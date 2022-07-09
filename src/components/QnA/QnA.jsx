import React, { useState } from 'react'

import { nanoid } from 'nanoid'

import './QnA.css'

const QnA = (props) => {
	const [quiz, setQuiz] = useState(props.quizData)

	const toggleIsSelected = (id) => {
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
			})
		}))
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
						key={nanoid()}
						className={`qna--option ${option.isSelected && 'qna--option-clicked'}`}
						onClick={() => toggleIsSelected(option.id)}
						dangerouslySetInnerHTML={{__html: option.value}}
					/>
				)}
			</div>
		</div>
	)
}

export default QnA
