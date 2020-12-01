import React, { useState, useEffect } from "react";
import { Container, FormField } from "./styles";
import { Button } from "../../components/Button";
import { Form } from "@unform/web";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { isUserLogged, BASE_URL, TOKENNAME, logout } from "../../utils";
import salesianaLogo from "../../images/rede-salesiana.png";
import Loading from "../../components/Loading/Loading";

const Login = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    isAlertOpen: false,
    status: "info",
    message: "",
  });

  useEffect(() => {
    if (isUserLogged()) {
      props.history.push("/usuarios");
    } else {
      // logout();
    }
  }, [props.history]);

  const submitForm = (data, { reset }) => {
    const body = { email: data.email, password: data.password };
    setLoading(true);
    fetch(BASE_URL + "/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        localStorage.setItem(TOKENNAME, data.token);
        localStorage.setItem("@cdbl/user", JSON.stringify(data.user));
        props.history.push("/admin/noticias");
      })
      .catch(() => {
        setLoading(false);
        setAlert({
          isAlertOpen: true,
          status: "error",
          message: "E-mail e/ou senha incorretos!",
        });
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
      {isLoading ? (
        <div
          style={{
            display: "flex",
            height: "-webkit-fill-available",
          }}
        >
          <Loading />
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Login;
