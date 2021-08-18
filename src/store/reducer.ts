const initState = {
    // questions
    questions: [],
    // answers
};

interface Action {
    type: {};
    state: [];
    questions: [];
}

export const Reducer = (state = initState, action: Action) => {
    switch (action.type) {
        case "SET_QUESTIONS":
            return {
                ...state,
                questions: action.questions,
            };
        default:
            return state;
    }
};
