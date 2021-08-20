import { useSelector, useDispatch } from "react-redux";
import { IState } from "../../store/reducer";

export const Results = () => {
    const quizResult = useSelector<IState>((state) => state.answers);

    return (
        <div className="resultsContainer">
            <div>Quiz results</div>
            <div>asd</div>
        </div>
    );
};
