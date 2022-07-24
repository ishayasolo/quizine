import './Option.css';

const Option = (props) => {
	return (
		<button
			className='option'
			onClick={() => { }}
			dangerouslySetInnerHTML={{ __html: props.option.value }}
		/>
	)
}

export default Option;
