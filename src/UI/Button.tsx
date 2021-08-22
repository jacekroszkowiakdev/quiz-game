import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}));

interface ButtonProps {
    buttonText: string;
    path: string;
}

export const ContainedButton = ({
    buttonText,
    path,
}: ButtonProps): JSX.Element => {
    const dispatch = useDispatch();
    const { push } = useHistory();
    const { root } = useStyles();
    const handleClick: React.MouseEventHandler = () => {
        push(path);
        dispatch({
            type: "SET_RESET",
            answers: [],
            index: 0,
            score: 0,
        });
    };

    return (
        <div className={root}>
            <Button onClick={handleClick} variant="contained" color="default">
                {buttonText}
            </Button>
        </div>
    );
};
