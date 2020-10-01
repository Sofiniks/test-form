import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Paper,
  Grid,
  TextField,
  Modal,
  IconButton,
  Typography,
} from "@material-ui/core";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import PhoneIcon from "@material-ui/icons/Phone";
import CloseIcon from "@material-ui/icons/Close";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      minWidth: "250px",
    },
  },
  submitButton: {
    textTransform: "capitalize",
    backgroundColor: "#00bfa5",
    borderRadius: "30px",
    padding: "10px 20px",
    color: "white",
    marginTop: theme.spacing(5),
    width: "200px",
    height: "50px",
    border: "1px solid transparent",
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(3),
    },
    "&:hover": {
      backgroundColor: "transparent",
      color: "#00bfa5",
      border: "1px solid #00bfa5",
    },
  },
  formPaper: {
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(1),
      paddingLeft: 0,
    },
  },
  infoPaperIcon: {
    color: "#00bfa5",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(4),
  },
  modalBody: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "600px",
    height: "300px",
    backgroundColor: "#fff",
    outline: "none",
    [theme.breakpoints.down("xs")]: {
      transform: "translate(0,0)",
      width: "100%",
      height: "80%",
      left: "0",
      right: "0",
      bottom: "0",
      top: "30%",
    },
  },
  modalTypography: {
    fontSize: "24px",
    color: "#313131",
    opacity: "0.7",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
      fontWeight: "SemiBold",
      marginBottom: theme.spacing(3),
    },
  },
  modalContainer: {
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      height: "30%",
    },
  },
  inputGrids: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(3),
      marginLeft: theme.spacing(3),
    },
  },
}));

function Form(props) {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [open, setOpen] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = async (e) => {
    if (!name || !email || !phone) {
      alert("Введите все данные");
      return;
    }
    e.preventDefault();
    const user = {
      name: name,
      email: email,
      phone: phone,
    };
    try {
      const res = await fetch("http://jsonplaceholder.typicode.com/posts", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-token-access": "random",
        },
        body: JSON.stringify({
          user,
        }),
      });
      localStorage.setItem("user", JSON.stringify(user));
      handleClose();
      setName("");
      setEmail("");
      setPhone("");
      setSubmit(true);
    } catch (err) {
      console.log(err);
    }
  };

  const isNameInvalid = (name) => {
    if (!name) {
      return false;
    }
    if (name[0].toUpperCase() === name[0]) {
      return false;
    }
    return true;
  };

  const isEmailInvalid = (email) => {
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!email) {
      return false;
    }
    if (email.match(pattern)) {
      return false;
    }
    return true;
  };

  const isPhoneInvalid = (phone) => {
    const pattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
    if (!phone) {
      return false;
    }
    if (phone.match(pattern)) {
      return false;
    }
    return true;
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAgree = () => {
    setSubmit(false);
  };

  const body = (
    <Paper className={classes.modalBody}>
      <Grid container justify='flex-end'>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Grid>
      <Grid container direction='column' justify='center' alignItems='center'>
        <Typography variant='h3' className={classes.modalTypography}>
          Сохранить изменения?
        </Typography>
        <Button
          className={classes.submitButton}
          type='submit'
          onClick={handleSubmit}
        >
          Сохранить
        </Button>
        <Button className={classes.submitButton} onClick={handleClose}>
          Не сохранять
        </Button>
      </Grid>
    </Paper>
  );

  const submitBody = (
    <Paper className={classes.modalBody}>
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        className={classes.modalContainer}
      >
        <Typography variant='h3' className={classes.modalTypography}>
          Данные успешно сохранены
        </Typography>
        {isWidthDown("xs", props.width) ? null : (
          <Button className={classes.submitButton} onClick={handleAgree}>
            Хорошо
          </Button>
        )}
      </Grid>
    </Paper>
  );

  return (
    <Paper className={classes.formPaper} elevation={5}>
      <form className={classes.root} onSubmit={handleSubmit} autoComplete='off'>
        <Grid container>
          <Grid
            item
            container
            sm={4}
            alignItems='center'
            className={classes.inputGrids}
          >
            {isWidthDown("xs", props.width) ? null : (
              <AssignmentIndIcon
                className={classes.infoPaperIcon}
                fontSize='large'
              />
            )}
            <TextField
              id='name'
              label='Фамилия и имя'
              placeholder='Укажите фамилию и имя'
              variant='outlined'
              InputLabelProps={{
                shrink: true,
              }}
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={isNameInvalid(name)}
              helperText={isNameInvalid(name) && "Вы неверно указали имя"}
            />
          </Grid>
          <Grid
            item
            sm={4}
            container
            alignItems='center'
            className={classes.inputGrids}
          >
            {isWidthDown("xs", props.width) ? null : (
              <AlternateEmailIcon
                className={classes.infoPaperIcon}
                fontSize='large'
              />
            )}
            <TextField
              id='email'
              label='E-mail'
              placeholder='Ivanova@mail.ru'
              variant='outlined'
              InputLabelProps={{
                shrink: true,
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={isEmailInvalid(email)}
              helperText={isEmailInvalid(email) && "Введите корректный e-mail"}
            />
          </Grid>
          <Grid
            item
            sm={4}
            container
            alignItems='center'
            className={classes.inputGrids}
          >
            {isWidthDown("xs", props.width) ? null : (
              <PhoneIcon className={classes.infoPaperIcon} fontSize='large' />
            )}
            <TextField
              id='phone'
              label='Номер телефона'
              placeholder='Укажите номер телефона'
              variant='outlined'
              InputLabelProps={{
                shrink: true,
              }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              error={isPhoneInvalid(phone)}
              helperText={isPhoneInvalid(phone) && "Введите корректный телефон"}
            />
          </Grid>
          <Grid item sm={12} xs={12} container justify='center'>
            <Button className={classes.submitButton} onClick={handleOpen}>
              Сохранить изменения
            </Button>
          </Grid>
        </Grid>
        <Modal open={open} onClose={handleClose}>
          {body}
        </Modal>
        <Modal
          open={submit}
          onClose={handleClose}
          className={classes.submitModal}
          onClick={handleAgree}
        >
          {submitBody}
        </Modal>
      </form>
    </Paper>
  );
}

export default withWidth()(Form);
