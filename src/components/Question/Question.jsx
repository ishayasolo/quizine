import Option from '../Option/Option';
import './Question.css';

const Question = (props) => {
	return (
		<div className='question-container'>
			<p
				className='question'
				dangerouslySetInnerHTML={{__html: props.question.question}}
			/>
			<div className="options">
				{props.question.options.map(option =>
					<Option
						key={option.id}
						option={option}
					/>
				)}
			</div>
		</div>
	);
}

export default Question;
