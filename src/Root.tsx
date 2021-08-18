import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import { Home } from "./components/Home";
import { QuestionCard } from "./components/QuestionCard";
import { Results } from "./components/Results";

export const Root = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/quiz/" component={QuestionCard} />
                <Route path="/results/" component={Results} />
            </Switch>
        </BrowserRouter>
    );
};
