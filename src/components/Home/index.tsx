import { ContainedButton } from "./../../UI/Button";
import { useEffect, useState } from "react";
import API from "./../../api/api";
import { useSelector, useDispatch } from "react-redux";

const query = "api.php?amount=10&difficulty=hard&type=boolean";

export const Home = () => {
    // const [questions, setQuestions] = useState([]);
    const dispatch = useDispatch();

    const setQuestions = (value: []) => {
        dispatch({
            type: "SET_QUESTIONS",
            questions: value,
        });
    };

    let getQuestions = async () => {
        const response = await API.get(`${query}`);
        const result = await response.data.results;
        console.log("data: ", result);
        setQuestions(result);
        return result;
    };

    // useEffect hook
    useEffect(() => {
        getQuestions();
    }, [getQuestions]);

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
