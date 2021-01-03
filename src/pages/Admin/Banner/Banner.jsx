import React, { useState, useEffect, useCallback } from "react";
import { Form } from "@unform/web";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Fab,
  Grid,
  ListItemText,
  Snackbar,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import DeleteIcon from "@material-ui/icons/Delete";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Input, Sidebar } from "../../../components";
import { isUserLogged, logout } from "../../../utils";
import { DropzoneArea } from "material-ui-dropzone";
import { BASE_URL, TOKENNAME } from "../../../utils";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(10),
    right: theme.spacing(10),
  },
}));

const BannerCrud = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [banners, setBanners] = useState(null);
  const [image, setImage] = useState(null);
  const [alert, setAlert] = useState({
    isAlertOpen: false,
    status: "info",
    message: "",
  });

  const fetchBanners = useCallback(() => {
    fetch(BASE_URL + "/banners", {
      method: "GET",
      headers: {
        "x-access-token": localStorage.getItem(TOKENNAME),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (
          (data.message && data.message === "No Token Provided") ||
          data.auth === false
        ) {
          logout();
          setAlert(
            true,
            "info",
            "Você foi desconectado por questões de segurança, logue novamente"
          );
        } else {
          setBanners(data);
        }
      })
      .catch((err) => {
        setAlert(
          true,
          "error",
          "Você foi desconectado por questões de segurança, logue novamente"
        );
      });
  }, []);

  useEffect(() => {
    if (!isUserLogged()) {
      props.history.push("/login");
    }
    fetchBanners();
  }, [fetchBanners, props.history]);

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

  const removeUser = async (id) => {
    fetch(BASE_URL + "/banners/" + id, {
      method: "DELETE",
      headers: {
        "x-access-token": localStorage.getItem(TOKENNAME),
      },
    })
      .then(() => {
        setAlert({
          isAlertOpen: true,
          status: "success",
          message: "Banner removido com sucesso",
        });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch(() => {
        setAlert({
          isAlertOpen: true,
          status: "error",
          message: "Erro no processamento do Banner",
        });
      });
  };

  const handleSubmit = async (data, { reset }) => {
    const formData = new FormData();
    const newBanner = { ...data, bannerImage: image };
    formData.append("name", newBanner.name);
    formData.append("redirectUrl", newBanner.redirectUrl);
    formData.append("bannerImage", newBanner.bannerImage);
    if (newBanner.name && newBanner.redirectUrl && newBanner.bannerImage) {
      fetch(BASE_URL + "/banners", {
        method: "POST",
        "Content-Type": "multipart/form-data",
        body: formData,
      })
        .then(() => {
          setAlert({
            isAlertOpen: true,
            status: "success",
            message: "Banner adicionado com sucesso.",
          });
          setTimeout(() => {
            window.location.reload();
          }, 2500);
        })
        .catch(() => {
          setAlert({
            isAlertOpen: true,
            status: "error",
            message: "Problema com o Banner! Tente novamente.",
          });
        });
    } else {
      setAlert({
        isAlertOpen: true,
        status: "error",
        message: "Erro no processamento do Banner",
      });
    }

    reset();
    setImage(null);
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
        {/* { */}
        <Snackbar
          open={alert.isAlertOpen}
          autoHideDuration={3500}
          onClose={handleAlertClose}
        >
          <Alert severity={alert.status} onClose={handleAlertClose}>
            {alert.message}
          </Alert>
        </Snackbar>
        {/* } */}
        <DialogTitle id="form-dialog-title">Novo Banner</DialogTitle>
        <Form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            height: "inherit",
          }}
        >
          <DialogContent>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Input name="name" label="Título" type="text" />
              <Input
                name="redirectUrl"
                label="URL de Direcionamento"
                type="text"
              />
              <DropzoneArea
                onChange={(files) => setImage(files[0])}
                acceptedFiles={["image/jpeg", "image/png", "image/jpg"]}
                dropzoneText={"Importar Foto"}
                filesLimit={1}
              />
              <p>Resolução do banner: 1350x350 pixels</p>
              <Button
                style={{
                  border: "solid 0.5px",
                  width: "50%",
                  margin: "32px auto",
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
          <h2 style={{ margin: "64px" }}>Gerenciar Banners</h2>
          <div>
            {banners
              ? banners.map((banner, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      width: "fit-content",
                      boxShadow:
                        "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <img
                        style={{ height: "90px" }}
                        src={banner.bannerImage}
                        alt={banner.name}
                      />
                      <ListItemText
                        primary={banner.name}
                        secondary={banner.redirectUrl}
                      />
                    </div>
                    <IconButton
                      onClick={() => removeUser(banner._id)}
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
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

export default BannerCrud;
