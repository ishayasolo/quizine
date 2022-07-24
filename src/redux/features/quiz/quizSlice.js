import { createSlice, nanoid } from "@reduxjs/toolkit";
import results from "../../../data";

const initializeQuiz = (quizData) => {
	let quiz = [];

	for (let i = 0; i < quizData.length; i++) {
		quiz.push({
			id: nanoid(),
			question: quizData[i].question,
			options: [
				...quizData[i].incorrect_answers,
				quizData[i].correct_answer
			].sort(() => Math.random() - 0.5).map(option => ({
				id: nanoid(),
				value: option,
				isSelected: false,
				isCorrect: option === quizData[i].correct_answer,
				isChecked: false,
				isRightChoice: false,
				isWrongChoice: false,
			})),
			correctAnswer: quizData[i].correct_answer,
		})
	}

	return quiz;
}

const initialState = {
	quizQuestions: initializeQuiz(results),
};

const quizSlice = createSlice({
	name: 'quiz',
	initialState,
	reducers: {},
});

export default quizSlice.reducer;
