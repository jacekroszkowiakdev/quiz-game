import { ContainedButton } from "./../../UI/Button";
import { useEffect, useState } from "react";
import API from "./../../api/api";

const query = "api.php?amount=10&difficulty=hard&type=boolean";

let getQuestions = async () => {
    const response = await API.get(`${query}`);
    const result = await response.data.results;
    console.log("data: ", result);
    return result;
};

export const Home = () => {
    const [questions, setQuestions] = useState([]);

    // useEffect hook
    useEffect(() => {
        getQuestions();
    }, []);

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
