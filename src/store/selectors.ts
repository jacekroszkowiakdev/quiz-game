import { IState } from "./reducer";
import { createSelector } from "reselect";

export const selectQuestions = (state: IState) => state.questions;

export const selectIndex = (state: IState) => state.index;

export const selectScore = (state: IState) => state.score;

export const selectActiveQuestion = createSelector(
    selectQuestions,
    selectIndex,
    (questions, index) => questions[index]
);
