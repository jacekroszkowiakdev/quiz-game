import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}));

interface ButtonProps {
    buttonText: string;
}

export const ContainedButton = (props: ButtonProps): JSX.Element => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button variant="contained" color="default">
                {props.buttonText}
            </Button>
        </div>
    );
};
