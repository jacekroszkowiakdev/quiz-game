import { Home } from "./components/Home";
import { QuestionCard } from "./components/QuestionCard";
import { Results } from "./components/Results";
import { Reducer } from "./store/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./App.css";

const store = createStore(Reducer);

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Home />
                <QuestionCard />
                <Results />
            </Provider>
        </div>
    );
}

export default App;
