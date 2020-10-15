import React, { useState, useEffect } from "react";
import { Container, FormField } from "./styles";
import { Button } from "../../components/Button";
import { Form } from "@unform/web";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { isUserLogged } from "../../utils";
import salesianaLogo from "../../images/rede-salesiana.png";
import { useFirestoreDocData, useFirestore } from "reactfire";
import Loading from "../../components/Loading/Loading";
// import base from "../../rebase";
// base
//   .fetch("api", {
//     context: this,
//     asArray: true,
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     //handle error
//   });

const Login = (props) => {
  const data = [
    {
      name: "Roberto Campos",
      password: "123456",
      email: "roberto.campos@domboscoleste.com.br",
    },
    {
      name: "Paula Vitória",
      password: "123456",
      email: "paula.vitoria@domboscoleste.com.br",
    },
  ];
  const cdbApi = useFirestore().collection("api").doc("users");
  const users = useFirestoreDocData(cdbApi);
  // useFirestore().collection("api").doc("users").set({
  //   user: data,
  // });
  // console.log(useFirestoreDocData(cdbApi));
  const [values, setValues] = useState(users);
  const [isLoading, setLoading] = useState(true);
  const [alert, setAlert] = useState({
    isAlertOpen: false,
    status: "info",
    message: "",
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchUsers = () => {
    console.log("fetchUsers");
    console.log(values);
    // setValues(data.users);
    setLoading(false);
  };

  useEffect(() => {
    if (isUserLogged()) {
      props.history.push("/usuarios");
    }
    fetchUsers();
  }, [fetchUsers, props.history]);

  const submitForm = (data, { reset }) => {
    values.user.forEach((user) => {
      if (user.email === data.email && user.password === data.password) {
        console.log(user);
        localStorage.setItem("@cdbl/session_user", JSON.stringify(user));
        props.history.push("/admin/noticias");
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
