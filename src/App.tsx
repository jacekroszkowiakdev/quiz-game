import { Home } from "./components/Home";
import { QuestionCard } from "./components/QuestionCard";
import { Results } from "./components/Results";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Home />
            <QuestionCard />
            <Results />
        </div>
    );
}

export default App;
