import React, { useState } from 'react'

import { nanoid } from 'nanoid'

import './QnA.css'
import Options from '../Options/Options'

const QnA = ({
	question,
	correct_answer,
	incorrect_answers
}) => {
	return (
		<div className='qna'>
			<p
				className='qna--question'
				dangerouslySetInnerHTML={{__html: question}}
			></p>
			<Options
				key={nanoid()}
				correct_answer={correct_answer}
				incorrect_answers={incorrect_answers}
			/>
		</div>
	)
}

export default QnA