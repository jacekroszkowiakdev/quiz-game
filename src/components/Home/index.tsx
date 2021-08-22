import { ContainedButton } from "./../../UI/Button";
import { useEffect } from "react";
import API from "./../../api/api";
import { useDispatch } from "react-redux";
import { Question } from "../../store/reducer";
import "./home.css";

const query = "api.php?amount=10&difficulty=hard&type=boolean";

export const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        let getQuestions = async () => {
            const response = await API.get(`${query}`);
            const result = await response.data.results;
            const setQuestions = (value: Question[]) => {
                dispatch({
                    type: "SET_QUESTIONS",
                    questions: value,
                });
            };
            setQuestions(result);
        };
        getQuestions();
        console.log("questions loaded");
    }, [dispatch]);

    return (
        <div
            className="container"
            style={{ border: "1px", borderRadius: "10px", width: "60vw" }}
        >
            <div className="home-header">
                <h1>Welcome to the Trivia Challenge</h1>
            </div>
            <div className="home-welcome-text">
                <p>You will be presented with 10 True or False questions.</p>
                <p>Can you score 100%?</p>
            </div>
            <ContainedButton
                className="begin-button"
                path="/quiz/"
                buttonText="Begin"
            />
        </div>
    );
};
