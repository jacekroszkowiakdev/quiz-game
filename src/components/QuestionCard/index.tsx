import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export const QuestionCard = () => {
    const score = useSelector((state) => state.score);
    const questionIndex = useSelector((state) => state.index);
    const questions = useSelector((state) => state.questions);
    const dispatch = useDispatch();
    const question = questions[questionIndex];
    const correctAnswer = question.correct_answer;

    return (
        <div className="quizContainer">
            <div className="category">category</div>
            <div>Question</div>
            <div>Question NUMBER</div>
        </div>
    );
};
