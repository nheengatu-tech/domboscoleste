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
import { generatePath } from "react-router";
import { DropzoneArea } from 'material-ui-dropzone'

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(10),
    right: theme.spacing(10),
  },
}));

const Post = (props) => {
  const classes = useStyles()
  const { create, read, remove } = useJsonBox();
  const [open, setOpen] = useState(false)
  const [posts, setPosts] = useState(null)
  const [text, setText] = useState(null)
  const [image, setImage] = useState(null)
  const [alert, setAlert] = useState({
    isAlertOpen: false,
    status: "info",
    message: "",
  });

  const fetchUsers = async () => {
    const { data } = await read("posts");
    setPosts(data)
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
    const post = ({ ...data, text, image })
    if (post.text && post.title && post.preview && post.image) {
      await
        create(post, 'posts')
          .then(() => {
            generatePath("/noticia/:title", {
              title: post.title.replace(/ /g, "-"),
            });
            setAlert({
              isAlertOpen: true,
              status: "success",
              message: "Postagem criada com sucesso"
            })
            setTimeout(() => {
              window.location.reload()
            }, 1000);
          })
          .catch(() => {
            setAlert({
              isAlertOpen: true,
              status: "error",
              message: "Erro no processamento da Postagem"
            })
          })
    } else {
      setAlert({
        isAlertOpen: true,
        status: "error",
        message: "Erro no processamento da Postagem"
      })
    }

    reset()
    setText('')
    setImage(null)
  }

  const handleText = (event) => {
    setText(event.target.value)
  }

  const handleImage = (files) => {
    if (files[0]) {
      setImage(files[0].name.replace(/ /g, "-"))
    }
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
        <DialogTitle id="form-dialog-title">Novo Post</DialogTitle>
        <Form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            height: "inherit"
          }}
        >
          <DialogContent>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Input name="title" label="Título" type="text" />
              <Input name="preview" label="Descrição" type="text" />
              <div style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "8px"
              }}
              >
                <span>Texto</span>
                <textarea style={{
                  border: "2px solid #ddd"
                }}
                 rows="10" cols="50" onChange={handleText} />
              </div>
              <DropzoneArea
                onChange={handleImage}
                acceptedFiles={['image/jpeg', 'image/png', 'image/jpg']}
                showPreviews={true}
                showPreviewsInDropzone={false}
                dropzoneText={"Importar Foto"}
                filesLimit={1}
              />
              <Button
                style={{
                  border: "solid 0.5px",
                  width: "50%",
                  margin: "32px auto"
                }}
              >
                POSTAR
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
          <h2 style={{ margin: "64px" }}>Gerenciar Postagens</h2>
          <Paper>
            <List>
              {
                posts ?
                posts.map((post, index) => (
                  <ListItem key={index}>
                    <ListItemAvatar>
                      <Avatar>
                        {/* <PersonIcon /> */}
                        <img src={post.image} alt={post.preview} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={post.title}
                      secondary={post._createdOn}
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        onClick={() => removeUser(post._id)}
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

export default Post;
