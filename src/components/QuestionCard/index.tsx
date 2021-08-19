import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "../../store/reducer";
import {
    selectScore,
    selectIndex,
    selectActiveQuestion,
} from "../../store/selectors";

export const QuestionCard = () => {
    const score = useSelector(selectScore);
    const questionIndex = useSelector(selectIndex);
    const questions = useSelector<IState>((state) => state.questions);
    const dispatch = useDispatch();
    const question = useSelector(selectActiveQuestion);
    const correctAnswer = question.correct_answer;

    return (
        <div className="quizContainer">
            <div className="category">{question.category}</div>
            <div>Question</div>
            <div>Question NUMBER</div>
        </div>
    );
};
