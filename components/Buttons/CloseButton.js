import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";

const useStyles = makeStyles((theme) => ({
  button: {
    fontSize: "14px",
    color: "#fff",
  },
}));

function CloseButton(props) {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      endIcon={<CloseIcon />}
      onClick={props.onClick}
    >
      {isWidthDown("xs", props.width) ? null : "Закрыть"}
    </Button>
  );
}

export default withWidth()(CloseButton);
