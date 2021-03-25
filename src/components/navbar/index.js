import React, { useState } from "react";
import { Drawer, IconButton, List, MenuList, Toolbar } from "@material-ui/core";
import { DrawerWrapper, OrdinaryMenuItem, SignupMenuItem } from "./styles";
import { Link } from "react-router-dom";
import { DarkMenuIcon } from "../siderbar/styles";
import { useMediaQuery } from "react-responsive";
import { DarkColor } from "../../sharedStyles";
import { ArrowUpward } from "@material-ui/icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const isMedium = useMediaQuery({
    query: "(min-width: 600px)",
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navbarItems = ["Home", "Services", "Faq", "Login", "Signup"].map(
    (item) =>
      item === "Signup" ? (
        <SignupMenuItem key={item}>
          <Link to={`/${item}`}>{item}</Link>
        </SignupMenuItem>
      ) : item === "Home" ? (
        <OrdinaryMenuItem key={item}>
          <Link to={`/`}>{item}</Link>
        </OrdinaryMenuItem>
      ) : (
        <OrdinaryMenuItem key={item}>
          <Link to={`/${item}`}>{item}</Link>
        </OrdinaryMenuItem>
      )
  );

  return (
    <DarkColor>
      {isMedium && (
        <Toolbar>
          <MenuList style={{ display: "flex" }}>{navbarItems}</MenuList>
        </Toolbar>
      )}

      {!isMedium && (
        <div>
          <Toolbar>
            <DarkMenuIcon onClick={handleDrawerOpen}></DarkMenuIcon>
          </Toolbar>
          <Drawer variant="persistent" anchor="top" open={open}>
            <DrawerWrapper>
              <div>
                <IconButton onClick={handleDrawerClose}>
                  <ArrowUpward />
                </IconButton>
              </div>
              <List>{navbarItems}</List>
            </DrawerWrapper>
          </Drawer>
        </div>
      )}
    </DarkColor>
  );
};

export default Navbar;
