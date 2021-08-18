import { ContainedButton } from "./../../UI/Button";

export const Home = () => {
    return (
        <div
            className="Home"
            style={{ border: "1px solid", borderRadius: "15px", width: "60vw" }}
        >
            <h1>Welcome to the Trivia Challenge</h1>
            <p>You will be presented with 10 True or False questions.</p>
            <p>Can you score 100%?</p>
            <ContainedButton />
        </div>
    );
};
