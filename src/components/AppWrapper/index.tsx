import { Provider } from "react-redux";
import { createStore } from "redux";
import { Reducer } from "./../../store/reducer";
import { App } from "./../../../src/App";

export const AppWrapper = () => {
    const store = createStore(Reducer);

    return (
        <Provider store={store}>
            {" "}
            <App />
        </Provider>
    );
};
