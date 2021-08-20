import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "../../store/reducer";
import {
    selectScore,
    selectIndex,
    selectActiveQuestion,
} from "../../store/selectors";

const randomize = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
};

export const QuestionCard = () => {
    const dispatch = useDispatch();
    const score = useSelector(selectScore);
    const questionIndex = useSelector(selectIndex);
    const questions = useSelector<IState>((state) => state.questions);
    console.log("questions", questions.length);
    const question = useSelector(selectActiveQuestion);
    const [answerOptions, setAnswerOptions] = useState<string[]>([""]);
    const correctAnswer = question.correct_answer;
    const quizResult = useSelector<IState>((state) => state.answers);
    console.log("score: ", score);
    console.log("result: ", quizResult);

    useEffect(() => {
        let answers: string[] = [...question.incorrect_answers];
        if (question) {
            answers.splice(
                randomize(question.incorrect_answers.length),
                0,
                correctAnswer
            );
            setAnswerOptions(answers);
        }
        return;
    }, [question, correctAnswer]);

    const handleAnswer = (evt: Event | any) => {
        const target = evt.target as HTMLLIElement;
        console.log("mouse event fired!");
        console.log("correctAnswer", correctAnswer);
        dispatch({
            type: "SET_INDEX",
            index: questionIndex + 1,
        });

        dispatch({
            type: "SET_ANSWER",
            score: score,
        });

        if (target.textContent === correctAnswer) {
            dispatch({
                type: "SET_SCORE",
                score: score + 1,
            });
        }

        (questionIndex === questions.length - 1) {

        }
    };

    return (
        <div className="quizContainer">
            <div className="category">{question.category}</div>
            <div>Question {questionIndex + 1}/10</div>
            <div>{question.question}</div>
            <div>Answer: </div>
            <ul>
                {answerOptions.map((answer, idx) => (
                    <li key={idx} onClick={handleAnswer}>
                        <button>{answer}</button>
                    </li>
                ))}
            </ul>
            <div>{score}</div>
        </div>
    );
};
