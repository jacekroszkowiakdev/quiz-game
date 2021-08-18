import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            marginTop: theme.spacing(2),
        },
    },
}));

export const PaginationOutlined = (): JSX.Element => {
    const { root } = useStyles();

    return (
        <div className={root}>
            <Pagination count={10} variant="outlined" />
            <Pagination count={10} variant="outlined" color="primary" />
            <Pagination count={10} variant="outlined" color="secondary" />
            <Pagination count={10} variant="outlined" disabled />
        </div>
    );
};
