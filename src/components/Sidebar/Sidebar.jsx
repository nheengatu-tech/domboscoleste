import React from "react";
import {
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { logout } from '../../utils'

const Sidebar = (props) => {
  return (
    <>
      <SwipeableDrawer onClose={() => {}} onOpen={() => {}} open={true} variant={"persistent"}>
        <List>
          <ListItem button onClick={() => props.history.push("/noticias")}>
            <ListItemIcon>
              <PostAddIcon />
            </ListItemIcon>
            <ListItemText primary={"Postagens"} />
          </ListItem>
          <Divider />
          <ListItem button onClick={() => props.history.push("/usuarios")}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary={"Usuários"} />
          </ListItem>
          <Divider />
          <ListItem style={{
            position: "fixed",
            bottom: 0,
            width: "initial"
            }}
            button onClick={() => logout()}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItem>
        </List>
      </SwipeableDrawer>
    </>
  );
};

export default Sidebar;
