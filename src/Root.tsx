import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { QuestionCard } from "./components/QuestionCard";
import { Results } from "./components/Results";

interface RouteProps {
    path?: string;
}

export const Root = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route<RouteProps> path="/" exact component={Home} />
                <Route<RouteProps> path="/quiz/" component={QuestionCard} />
                <Route<RouteProps> path="/results/" component={Results} />
            </Switch>
        </BrowserRouter>
    );
};
