const initState = {
    // questions
    questions: [],
    // answers
    index: 0,
    score: 0,
};

interface Action {
    type: {};
    state: [];
    questions: [];
    index: number;
    score: number;
}

export const Reducer = (state = initState, action: Action) => {
    switch (action.type) {
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
        default:
            console.log(state);
            return state;
    }
};
