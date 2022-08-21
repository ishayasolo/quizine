import './Option.css'

const Option = (props) => {
	const { option, questionId, toggleIsSelected } = props
	const { id: optionId, isSelected, value } = option

	return (
		<button
			className={`option ${isSelected && 'option-clicked'}`}
			onClick={() => toggleIsSelected(optionId, questionId)}
			dangerouslySetInnerHTML={{__html: value}}
		/>
	)
}

export default Option
