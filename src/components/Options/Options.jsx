import React, { useState } from 'react'

import { nanoid } from 'nanoid'

import './Options.css'

const Options = ({
	correct_answer,
	incorrect_answers
}) => {
	const shuffledOptions = () => {
		let allOptions = [...incorrect_answers, correct_answer]
		let shuffledOptions = allOptions.sort(() => Math.random() - 0.5)
		
		shuffledOptions = shuffledOptions.map(option => ({
			id: nanoid(),
			value: option,
			isSelected: false
		}))
		
		return shuffledOptions
	}

	const [options, setOptions] = useState(shuffledOptions())
	const [selectedOption, setSelectedOption] = useState('')
	
	const toggleIsSelected = (id) => {
		setOptions(options => options.map(option => {
			return option.id === id ? {
				...option,
				isSelected: !option.isSelected
			} : {
				...option,
				isSelected: false
			}
		}))

		// options.forEach(option => {
		// 	(option.id === id && option.value === correct_answer)
		// 	&& 
		// 	setSelectedOption(option.)
		// })
	}
	
	return (
		<div className="options">
			{options.map(option => 
				<button
					key={nanoid()}
					className={`option ${option.isSelected && 'option-clicked'}`}
					onClick={() => toggleIsSelected(option.id)}
					dangerouslySetInnerHTML={{__html: option.value}}
				/>
			)}
		</div>
	)
}

export default Options