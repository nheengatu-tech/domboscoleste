import React, { useState, useEffect } from "react";
import { Form } from "@unform/web";
import MUIRichTextEditor from "mui-rte";
import { stateToHTML } from 'draft-js-export-html'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Fab,
  Grid,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Snackbar,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import DeleteIcon from "@material-ui/icons/Delete";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Input, Sidebar } from "../../../components";
import { isUserLogged } from "../../../utils";
import { generatePath } from "react-router";
import { DropzoneArea } from "material-ui-dropzone";
import { BASE_URL, TOKENNAME } from "../../../utils";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(10),
    right: theme.spacing(10),
  },
}));

const Post = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState(null);
  const [text, setText] = useState(null);
  const [image, setImage] = useState(null);
  // const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [alert, setAlert] = useState({
    isAlertOpen: false,
    status: "info",
    message: "",
  });

  const fetchPosts = async () => {
    fetch(BASE_URL + "/posts")
     .then(res => res.json())
     .then(data => setPosts(data))
  };

  useEffect(() => {
    if (!isUserLogged()) {
      props.history.push("/login");
    }
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const removePost = async (id) => {
    fetch(BASE_URL + "/posts/" + id, {
      method: "DELETE",
      headers: {
        "x-access-token": localStorage.getItem(TOKENNAME),
      },
    })
      .then(() => {
        setAlert({
          isAlertOpen: true,
          status: "success",
          message: "Postagem removido com sucesso",
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch(() => {
        setAlert({
          isAlertOpen: true,
          status: "error",
          message: "Erro no processamento da Postagem",
        });
      });
  };

  const handleSubmit = async (data, { reset }) => {
    const formData = new FormData();
    const newPost = { ...data, postImage: image, text: stateToHTML(text.getCurrentContent()) };
    console.log(newPost);
    formData.append("title", newPost.title);
    formData.append("description", newPost.description);
    formData.append("text", newPost.text);
    formData.append("path", newPost.url);
    formData.append("postImage", newPost.postImage);
    if (newPost.text && newPost.title && newPost.description && newPost.postImage) {
      fetch(BASE_URL + "/posts", {
        method: "POST",
        "Content-Type": "multipart/form-data",
        body: formData,
      })
        .then((response) => {
          console.log({response});
          generatePath("/noticia/:title", {
            title: newPost.url,
          });
          setAlert({
            isAlertOpen: true,
            status: "success",
            message: "Postagem criada com sucesso",
          });
          setTimeout(() => {
            // window.location.reload();
          }, 2500);
        })
        .catch(() => {
          setAlert({
            isAlertOpen: true,
            status: "error",
            message: "Erro no Servidor",
          });
        });
    } else {
      setAlert({
        isAlertOpen: true,
        status: "error",
        message: "Erro no processamento da Postagem",
      });
    }

    // reset();
    // setText("");
    // setImage(null);
  };

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
            <Alert severity={alert.status} onClose={handleAlertClose}>
              {alert.message}
            </Alert>
          </Snackbar>
        }
        <DialogTitle id="form-dialog-title">Novo Post</DialogTitle>
        <Form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            height: "inherit",
          }}
        >
          <DialogContent>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Input name="title" label="Título" type="text" />
              <Input name="description" label="Descrição" type="text" />
              <Input name="url" label="URL" type="text" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "64px",
                }}
              >
                <span>Texto</span>
                <MUIRichTextEditor
                  label="Texto da postagem"
                  onChange={(state) => {
                    // console.log(state);
                    setText(state)
                  }}
                  // onChange={(state) => {
                  //   // Get current selection
                  //   // console.log(state.getSelection())
                  //   // Get current content
                  //   // console.log(JSON.stringify(convertToRaw(state.getCurrentContent())))
                  //   // Get current text
                  //   console.log(typeof stateToHTML(state.getCurrentContent()))
                  //   // console.log(stateToHTML(state.getCurrentContent()))
                  //   // console.log(state.getBlockTree())
                    
                  // }}
                  inlineToolbar={false}
                  controls={["bold", "italic", "underline", "highlight", "link", "numberList", "bulletList", "quote"]}
                />
                {/* <textarea
                  style={{
                    border: "2px solid #ddd",
                  }}
                  rows="10"
                  cols="50"
                  onChange={(event) => setText(event.target.value)}
                /> */}
              </div>
              <DropzoneArea
                onChange={(files) => setImage(files[0])}
                acceptedFiles={["image/jpeg", "image/png", "image/jpg"]}
                dropzoneText={"Importar Foto"}
                filesLimit={1}
              />
              <p>Resolução do banner: 500x335 pixels</p>
              <Button
                style={{
                  border: "solid 0.5px",
                  width: "50%",
                  margin: "32px auto",
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
          <div>
              {posts
                ? posts.map((post, index) => (
                    <div
                      key={index}
                      style={{
                      display: "flex",
                      width: "fit-content",
                      margin: "32px",
                      boxShadow:
                        "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
                    }}>
                      <div style={{
                        display: "flex",
                        flexDirection: "column",
                      }}>
                          <img style={{ height: "150px" }} src={post.postImage} alt={post.title} />
                      </div>
                      <ListItemText
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          margin: "8px"
                        }}
                        primary={post.title}
                        secondary={`URL: ${post.path}`}
                      />
                      <div style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          margin: "8px"
                        }}>
                        <IconButton
                          onClick={() => removePost(post._id)}
                          edge="end"
                          aria-label="delete"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    </div>
                  ))
                : null}
          </div>
          <Fab color="primary" className={classes.fab} onClick={handleOpen}>
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
    </>
  );
};

export default Post;
