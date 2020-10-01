import Header from "../components/Header";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "url(" + `${require("../public/Rectangle1.png")}` + ")",
    width: "100%",
    height: "470px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("xs")]: {
      height: "200px",
    },
  },
  main: {
    marginTop: "30px",
  },
  title: {
    fontSize: "18px",
    textTransform: "uppercase",
    marginBottom: "10px",
    color: "#fff",
  },
  subtitle: {
    fontSize: "14px",
    color: "#fff",
  },
  container: {
    margin: theme.spacing(2),
  },
}));
export function MainLayout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.container}>
        <Typography variant='h3' className={classes.title}>
          Личный профиль
        </Typography>
        <Typography variant='h4' className={classes.subtitle}>
          Главная/Личный профиль
        </Typography>
        <main className={classes.main}>{children}</main>
      </div>
    </div>
  );
}
