const initState = {
    questions: [] as Question[],
    answers: [] as Result[],
    index: 0,
    score: 0,
};

export type IState = typeof initState;

export type Result = {
    correct: boolean;
    answer: string;
};

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
};

interface Action {
    type: string;
    questions: Question[];
    index: number;
    score: number;
    answer: string;
    answers: Result[];
}

const checkIfCorrect = (state: IState, answer: string): boolean => {
    const question = state.questions[state.index];
    return answer === question.correct_answer;
};
export const Reducer = (state = initState, action: Action): IState => {
    switch (action.type) {
        case "SET_ANSWER":
            if (state.answers[state.index]) {
                return state;
            }

            const answers = [...state.answers];
            const correct = checkIfCorrect(state, action.answer);
            console.log("correct: ", correct, state.score); // sets correct to whatever is clicked...?
            console.log("STATE answers: ", state.answers);

            const result: Result = {
                correct,
                answer: action.answer,
            };
            answers[state.index] = result;

            return {
                ...state,
                answers,
                score: correct ? state.score + 1 : state.score,
            };

        case "SET_QUESTIONS":
            return {
                ...state,
                questions: action.questions,
            };

        case "SET_INDEX":
            return {
                ...state,
                index: action.index,
            };

        case "SET_SCORE":
            return {
                ...state,
                score: action.score,
            };

        case "SET_RESET":
            return {
                ...state,
                score: 0,
                index: 0,
                answers: [],
            };
        default:
            return state;
    }
};
