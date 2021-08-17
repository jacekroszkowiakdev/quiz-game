import axios from "axios";
import { useEffect } from "react";
import API from "./api/api";
import { Home } from "./components/Home";
import { QuestionCard } from "./components/QuestionCard";
import { Results } from "./components/Results";

import "./App.css";

let query = "api.php?amount=10&difficulty=hard&type=boolean";

let getQuestions = async () => {
    const response = await API.get(`${query}`);

    const result = await response.data.results;
    console.log("data: ", result);
    return result;
};

function App() {
    useEffect(() => {
        getQuestions();
    }, []);

    return (
        <div className="App">
            <Home />
            <QuestionCard />
            <Results />
        </div>
    );
}

export default App;
