import React, { useState, useEffect } from "react";
import { Container, FormField } from "./styles";
import { Button } from "../../components/Button";
import { Form } from "@unform/web";
import useJsonBox from "react-jsonbox";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { isUserLogged } from "../../utils";
import salesianaLogo from "../../images/rede-salesiana.png";

const Login = (props) => {
  const { read } = useJsonBox();
  const [values, setValues] = useState([]);
  const [alert, setAlert] = useState({
    isAlertOpen: false,
    status: "info",
    message: "",
  });
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchUsers = async () => {
    const { data } = await read("users");
    setValues(data);
  }

  useEffect(() => {
    if (isUserLogged()) {
      props.history.push("/usuarios");
    }
    fetchUsers();
  }, []);

  const submitForm = (data, { reset }) => {
    values.forEach((user) => {
      if (user.email === data.email && user.password === data.password) {
        console.log(user);
        localStorage.setItem(
          "@cdbl/session_user",
          JSON.stringify(user)
        );
        props.history.push("/dashboard");
      }
    });
    setAlert({
      isAlertOpen: true,
      status: "error",
      message: "E-mail e/ou senha incorretos!",
    });
    reset();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert((prevState) => ({
      ...prevState,
      isAlertOpen: false,
    }));
  };

  return (
    <>
      {
        <Snackbar
          open={alert.isAlertOpen}
          autoHideDuration={3500}
          onClose={handleClose}
        >
          <Alert severity={alert.status} onClose={handleClose}>
            {alert.message}
          </Alert>
        </Snackbar>
      }
      <Form
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "white",
        }}
        onSubmit={submitForm}
      >
        <img
          style={{
            maxWidth: "400px",
            display: "flex",
            margin: "0 auto 0",
          }}
          src={salesianaLogo}
          alt={"Logotipo"}
        />
        <Container>
          <div
            style={{
              display: "flex",
              margin: "32px auto",
              flexDirection: "column",
              width: "90%",
            }}
          >
            <h2>Login</h2>
            <FormField name="email" label="E-mail" type="email" />
            <FormField name="password" label="Senha" type="password" />
            <Button type="submit">ENTRAR</Button>
          </div>
        </Container>
      </Form>
    </>
  );
};

export default Login;
