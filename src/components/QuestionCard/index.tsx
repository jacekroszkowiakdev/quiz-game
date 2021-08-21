import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    selectScore,
    selectIndex,
    selectActiveQuestion,
    selectQuestions,
} from "../../store/selectors";

const randomize = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
};

export const QuestionCard = () => {
    const dispatch = useDispatch();
    const score = useSelector(selectScore);
    const questionIndex = useSelector(selectIndex);
    const questions = useSelector(selectQuestions);
    const question = useSelector(selectActiveQuestion);
    const [answerOptions, setAnswerOptions] = useState<string[]>([""]);
    const correctAnswer = question.correct_answer;
    const { push } = useHistory();

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
        const target = evt.target as HTMLButtonElement;
        console.log("target.textContent:", target.textContent);

        dispatch({
            type: "SET_ANSWER",
            answer: target.textContent,
        });

        dispatch({
            type: "SET_INDEX",
            index: questionIndex + 1,
        });

        if (target.textContent === correctAnswer) {
            dispatch({
                type: "SET_SCORE",
                score: score + 1,
            });
        }

        if (questionIndex === questions.length - 1) {
            // setTimeout(() => {
            //     push("/results/");
            // }, 3000);
            push("/results/");
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
                    <li key={idx}>
                        <button onClick={handleAnswer}>{answer}</button>
                    </li>
                ))}
            </ul>
            {/* {questionIndex + 1 === questions.length ?? <div>See results</div>} */}
        </div>
    );
};
