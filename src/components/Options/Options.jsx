import React, { useState } from 'react'

import { nanoid } from 'nanoid'

import './Options.css'

const Options = ({
	shuffledOptions,
}) => {
	const [options, setOptions] = useState(shuffledOptions())
	
	const toggleIsSelected = (id) => {
		setOptions(options => options.map(option => {
			return option.id === id ? {
				...option,
				isSelected: !option.isSelected,
			} : {
				...option,
				isSelected: false
			}
		}))
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