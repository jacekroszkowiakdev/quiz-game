import { ContainedButton } from "./../../UI/Button";
import { useEffect, useState } from "react";
import API from "./../../api/api";
import { useDispatch } from "react-redux";
import { Question } from "../../store/reducer";

const query = "api.php?amount=10&difficulty=hard&type=boolean";

export const Home = () => {
    const dispatch = useDispatch();

    // useEffect hook
    useEffect(() => {
        let getQuestions = async () => {
            const response = await API.get(`${query}`);
            const result = await response.data.results;
            // this is where we will set questions in the state using an action
            const setQuestions = (value: Question[]) => {
                dispatch({
                    type: "SET_QUESTIONS",
                    questions: value,
                });
            };
            console.log("data: ", result);
            setQuestions(result);
            // return result;
        };
        getQuestions();
    }, [dispatch]);

    return (
        <div
            className="Home"
            style={{ border: "1px solid", borderRadius: "15px", width: "60vw" }}
        >
            <h1>Welcome to the Trivia Challenge</h1>
            <p>You will be presented with 10 True or False questions.</p>
            <p>Can you score 100%?</p>

            <ContainedButton path="/quiz/" buttonText="Begin" />
        </div>
    );
};
