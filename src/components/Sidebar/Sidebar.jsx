import React from "react";
import {
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ViewCarouselIcon from "@material-ui/icons/ViewCarousel";
import PostAddIcon from "@material-ui/icons/PostAdd";
import { logout } from "../../utils";

const Sidebar = (props) => {
  return (
    <>
      <SwipeableDrawer
        onClose={() => {}}
        onOpen={() => {}}
        open={true}
        variant={"persistent"}
      >
        <List>
          <ListItem
            button
            onClick={() => props.history.push("/admin/noticias")}
          >
            <ListItemIcon>
              <PostAddIcon />
            </ListItemIcon>
            <ListItemText primary={"Postagens"} />
          </ListItem>
          <Divider />
          <ListItem button onClick={() => props.history.push("/admin/banners")}>
            <ListItemIcon>
              <ViewCarouselIcon />
            </ListItemIcon>
            <ListItemText primary={"Banners"} />
          </ListItem>
          <Divider />
          <ListItem
            style={{
              position: "fixed",
              bottom: 0,
              width: "initial",
            }}
            button
            onClick={() => logout()}
          >
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
