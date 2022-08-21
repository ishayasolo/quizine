import Option from '../option/Option'
import './QuestionAndOptions.css'

const QuestionAndOptions = (props) => {
	const { questionData, questionId, toggleIsSelected, isChecked } = props
	const { question, options } = questionData

	return (
		<div className='qno'>
			<p
				className='qno--question'
				dangerouslySetInnerHTML={{__html: question}}
			/>
			<div className="qno--options">
				{options.map(option =>
					<Option
						key={option.id}
						option={option}
						questionId={questionId}
						toggleIsSelected={toggleIsSelected}
						isChecked={isChecked}
					/>
				)}
			</div>
		</div>
	)
}

export default QuestionAndOptions
