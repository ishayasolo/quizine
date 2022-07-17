import React from 'react';

import './QnA.css';

const QnA = (props) => {
	// const setSelectedAnswer = (options) => {
	// 	let answer = null

	// 	for (let i = 0; i < options.length; i++) {
	// 		if (options[i].isSelected)
	// 			answer = options[i].value
	// 	}

	// 	return answer;
	// }
	const selectedOption = {
		backgroundColor: '#D6DBF5',
		borderColor: '#D6DBF5',
	}


	return (
		<div className='qna'>
			<p
				className='qna--question'
				dangerouslySetInnerHTML={{__html: props.quizData.question}}
			/>
			<div className="qna--options">
				{props.quizData.options.map(option =>
					<button
						key={option.id}
						id={option.id}
						className={`qna--option ${option.isSelected && 'qna--option-clicked'}`}
						onClick={() => props.toggleIsSelected(option.id, props.quizId)}
						dangerouslySetInnerHTML={{__html: option.value}}
					/>
				)}
			</div>
		</div>
	);
}

export default QnA
