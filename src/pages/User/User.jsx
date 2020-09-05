import React, { useState, useEffect } from "react";
import { Form } from "@unform/web";
import {
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Fab,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Snackbar,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import DeleteIcon from "@material-ui/icons/Delete";
import PersonIcon from '@material-ui/icons/Person';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Input, Sidebar } from "../../components";
import useJsonBox from "react-jsonbox";
import { isUserLogged } from '../../utils'

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(10),
    right: theme.spacing(10),
  },
}));

const User = (props) => {
  const classes = useStyles()
  const { create, read, remove } = useJsonBox();
  const [open, setOpen] = useState(false)
  const [users, setUsers] = useState(null)
  const [alert, setAlert] = useState({
    isAlertOpen: false,
    status: "info",
    message: "",
  });

  const fetchUsers = async () => {
    const { data } = await read("users");
    setUsers(data);
  }

  useEffect(() => {
    if (!isUserLogged()) {
      props.history.push("/login");
    }
    fetchUsers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert((prevState) => ({
      ...prevState,
      isAlertOpen: false,
    }));
  };

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const removeUser = async(id) => {
    await remove(id)
    .then(() => {
      setAlert({
        isAlertOpen: true,
        status: "success",
        message: "Usuário removido com sucesso"
      })
      setTimeout(() => {
        window.location.reload()
      }, 1000);
    })
    .catch(() => {
      setAlert({
        isAlertOpen: true,
        status: "error",
        message: "Erro no processamento do usuário"
      })
    })
  }

  const handleSubmit = async(data, { reset }) => {
    const user = ({ ...data })
    if (user.email && user.password && user.name) {
      await
        create(user, 'users')
          .then(() => {
            setAlert({
              isAlertOpen: true,
              status: "success",
              message: "Usuário criado com sucesso"
            })
            setTimeout(() => {
              window.location.reload()
            }, 1500);
          })
          .catch(() => {
            setAlert({
              isAlertOpen: true,
              status: "error",
              message: "Erro no processamento do usuário"
            })
          })
    } else {
      setAlert({
        isAlertOpen: true,
        status: "error",
        message: "Erro no processamento do usuário"
      })
    }

    reset()
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth={"sm"}
      >
        <div
          style={{
            display: "flex",
            margin: "8px",
            justifyContent: "flex-end",
            cursor: "pointer",
          }}
          onClick={handleClose}
        >
          <CloseIcon width="50px" />
        </div>
        {
        <Snackbar
          open={alert.isAlertOpen}
          autoHideDuration={3500}
          onClose={handleAlertClose}
        >
          <Alert severity={alert.status} onClose={handleAlertClose} >
            {alert.message}
          </Alert>
        </Snackbar>
      }
        <DialogTitle id="form-dialog-title">Novo Usuário</DialogTitle>
        <Form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            height: "inherit"
          }}
        >
          <DialogContent>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Input name="name" label="Nome" type="text" />
              <Input name="email" label="E-mail" type="email" />
              <Input name="password" label="Senha" />
              <Button
                style={{
                  border: "solid 0.5px",
                  width: "50%",
                  margin: "32px auto"
                }}
              >
                SALVAR
              </Button>
            </div>
          </DialogContent>
        </Form>
      </Dialog>
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <Sidebar history={props.history} />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={4}>
          <h2 style={{ margin: "64px" }}>Gerenciar Usuários</h2>
          <Paper>
            <List>
              {
                users ?
                users.map((user, index) => (
                  <ListItem key={index}>
                    <ListItemAvatar>
                      <Avatar>
                        <PersonIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={user.name}
                      secondary={user.email}
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        onClick={() => removeUser(user._id)}
                        edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))
                :
                null
              }
            </List>
          </Paper>
          <Fab color="primary" className={classes.fab} onClick={handleOpen}>
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
    </>
  );
};

export default User;
