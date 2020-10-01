import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";

const useStyles = makeStyles((theme) => ({
  button: {
    fontSize: "14px",
    color: "#fff",
  },
}));

function EditButton(props) {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      endIcon={<EditIcon />}
      onClick={props.onClick}
    >
      {isWidthDown("xs", props.width) ? null : "Редактировать"}
    </Button>
  );
}
export default withWidth()(EditButton);
