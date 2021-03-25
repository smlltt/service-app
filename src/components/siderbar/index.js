import React, { useState } from "react";
import {
  Toolbar,
  IconButton,
  Drawer,
  ListItem,
  ListItemText,
  List,
} from "@material-ui/core";

import { DarkBackGround, DarkMenuIcon, LightArrowBack } from "./styles";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuItems = ["User", "Messages", "Images", "Settings"].map(
    (text, index) => (
      <ListItem button key={text}>
        <ListItemText primary={text} onClick={() => console.log(text)} />
      </ListItem>
    )
  );

  return (
    <div>
      <Toolbar>
        <DarkMenuIcon onClick={handleDrawerOpen}></DarkMenuIcon>
      </Toolbar>
      <Drawer variant="persistent" anchor="left" open={open}>
        <DarkBackGround>
          <div>
            <IconButton onClick={handleDrawerClose}>
              <LightArrowBack />
            </IconButton>
          </div>
          <List>{menuItems}</List>
        </DarkBackGround>
      </Drawer>
    </div>
  );
};

export default Sidebar;
