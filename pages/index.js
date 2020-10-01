import { useState } from "react";
import Head from "next/head";
import { MainLayout } from "../components/MainLayout";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Paper, Grid, TextField } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import Info from "../components/Info";
import Form from "../components/Form";
import Name from "../components/Name";
import EditButton from "../components/Buttons/EditButton";
import CloseButton from "../components/Buttons/CloseButton";

const useStyles = makeStyles((theme) => ({
  namePaper: {
    backgroundColor: "#1a78c2",
    color: "white",
    fontFamily: "Open Sans",
    padding: "50px 0",
    paddingRight: theme.spacing(2),
    marginBottom: "24px",
  },
  button: {
    fontSize: "14px",
    color: "#fff",
  },
  heading: {
    fontWeight: "400",
    fontSize: "30px",
  },
}));

export default function Home() {
  const classes = useStyles();

  const [edit, setEdit] = useState(false);
  const handleClick = () => {
    setEdit(!edit);
    console.log("click");
  };
  return (
    <MainLayout>
      <Name>
        {edit ? (
          <CloseButton onClick={handleClick} />
        ) : (
          <EditButton onClick={handleClick} />
        )}
      </Name>
      {edit ? <Form /> : <Info />}
    </MainLayout>
  );
}
