import { Container } from "@mui/system";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import React from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          margin: " 2em 0",
        }}
        maxWidth="xl"
      >
        <div>
          <Button>
            <HomeWorkIcon sx={{ transform: "scale(2)" }} />
            <Typography variant="h5">
              &nbsp;&nbsp;&nbsp; Reunion RealEstate
            </Typography>
          </Button>
        </div>
        <div>
          <Link to="/rent">
            <Button sx={{ margin: "auto" }}>
              <Typography variant="h6">Rent</Typography>
            </Button>
          </Link>
          <Link to="/buy">
            <Button sx={{ margin: "auto" }}>
              <Typography variant="h6">Buy</Typography>
            </Button>
          </Link>
          <Link to="sell">
            <Button sx={{ margin: "auto" }}>
              <Typography variant="h6">Sell</Typography>
            </Button>
          </Link>
        </div>
        <div>
          <Button sx={{ margin: "0 0.5em" }} color="primary" variant="outlined">
            <Typography>Login</Typography>
          </Button>
          <Button
            sx={{ margin: "0 0.5em" }}
            color="primary"
            variant="contained"
          >
            <Typography>SignUp</Typography>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
