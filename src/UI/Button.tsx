import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

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
    const { push } = useHistory();
    const { root } = useStyles();
    const handleClick: React.MouseEventHandler = () => {
        push(path);
    };

    return (
        <div className={root}>
            <Button onClick={handleClick} variant="contained" color="default">
                {buttonText}
            </Button>
        </div>
    );
};
