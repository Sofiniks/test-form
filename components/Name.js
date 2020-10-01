import { Typography, Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  namePaper: {
    backgroundColor: "#1a78c2",
    color: "white",
    fontFamily: "Open Sans",
    padding: "50px 0",
    paddingRight: theme.spacing(2),
    marginBottom: "24px",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2),
    },
  },
  button: {
    fontSize: "14px",
    color: "#fff",
  },
  heading: {
    fontWeight: "400",
    fontSize: "30px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      textTransform: "capitalize",
      alignItems: "center",
    },
  },
}));

export default function Name({ children }) {
  const classes = useStyles();

  return (
    <Paper className={classes.namePaper} elevation={5}>
      <Grid container>
        <Grid item sm={1} />
        <Grid
          item
          sm={11}
          container
          justify='space-between'
          alignItems='center'
        >
          <Typography className={classes.heading} variant='h2'>
            Иванова Анна Михайловна
          </Typography>
          {children}
        </Grid>
      </Grid>
    </Paper>
  );
}
