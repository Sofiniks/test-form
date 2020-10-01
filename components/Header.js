import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontSize: "14px",
    marginLeft: "80px",
  },
  header: {
    backgroundColor: "transparent",
    color: "white",
    boxShadow: "none",
    [theme.breakpoints.down("xs")]: {
      paddingRight: theme.spacing(3),
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
  },
  icon: {
    borderRight: "1px solid white",
    paddingRight: "26px",
    color: "white",
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      paddingRight: "10px",
    },
  },
}));
function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.icon}>
            <NotificationsNoneIcon />
          </div>
          {isWidthDown("xs", props.width) ? null : (
            <Typography variant='h6' className={classes.title}>
              Иванова А.
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withWidth()(Header);
