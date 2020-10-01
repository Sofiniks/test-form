import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import PhoneIcon from "@material-ui/icons/Phone";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  infoPaperDetails: {
    display: "flex",
    padding: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(4),
    alignItems: "center",
    borderBottom: "1px solid #cae7fe",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  },
  infoPaperIcon: {
    color: "#00bfa5",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
}));

export default function Info() {
  const classes = useStyles();

  const [user, setUser] = useState("");

  useEffect(() => {
    const newUser = JSON.parse(localStorage.getItem("user"));
    setUser(newUser);
  }, []);

  return (
    <Paper className={classes.infoPaper} elevation={5}>
      <div className={classes.infoPaperDetails}>
        <AlternateEmailIcon
          className={classes.infoPaperIcon}
          fontSize='large'
        />
        <Typography>{user ? user.email : "Укажите e-mail"}</Typography>
      </div>
      <div className={classes.infoPaperDetails}>
        <PhoneIcon className={classes.infoPaperIcon} fontSize='large' />
        <Typography>{user ? user.phone : "Укажите номер телефона"}</Typography>
      </div>
    </Paper>
  );
}
