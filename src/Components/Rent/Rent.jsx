import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import MediaCard from "./MediaCard";
import RentData from "./RentData.json";
const Rent = () => {
  const [Data, setData] = useState(RentData);
  const [search_data, setsearch_data] = useState({
    location: "Select",
    minPrice: 0,
    maxPrice: 20000,
    property: "Select",
    name: "",
  });
  const location = [
    "Select",
    "Mumbai",
    "Aligarh",
    "Delhi",
    "Banglore",
    "Hyderabad",
    "Gandhi Nagar",
  ];

  const maxPrice = [5000, 7000, 10000, 15000, 20000];
  const minPrice = [0, 1000, 5000, 7000, 10000, 15000, 20000];
  const property = ["Select", "House", "Office", "Cafe", "Resort", "Villa"];
  const handleChange = (e) => {
    let updatedData = {};
    updatedData = { [e.target.name]: e.target.value };
    setsearch_data((search_data) => ({
      ...search_data,
      ...updatedData,
    }));
  };
  const handlesearch = () => {
    let temp = [];
    const { location, minPrice, maxPrice, property, name } = search_data;
    for (let i = 0; i < RentData.length; i++) {
      const element = RentData[i];
      if (location === element.location || location === "Select") {
        if (element.price >= minPrice && element.price <= maxPrice) {
          if (property === element.property || property === "Select") {
            if (name.trim() === "" || name.trim() === element.name) {
              temp.push(element);
            }
          }
        }
      }
    }
    setData(temp);
  };
  return (
    <div>
      <Container
        sx={{
          BackgroundColor: "grey",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4">Search Property for Rent</Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <TextField
            value={search_data.name}
            name="name"
            onChange={handleChange}
            id="outlined-basic"
            label="Search"
            variant="outlined"
          />
        </div>
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "white",
          padding: "1em",
        }}
      >
        <div style={{ margin: "2em 1em" }}>
          <InputLabel id="location">Location</InputLabel>
          <Select
            sx={{ width: "15vw" }}
            labelId="location"
            id="demo-simple-select"
            value={search_data.location}
            name="location"
            label="Location"
            onChange={handleChange}
          >
            {location.map((element) => {
              return <MenuItem value={element}>{element}</MenuItem>;
            })}
          </Select>
        </div>
        <div style={{ margin: "2em 1em" }}>
          <InputLabel id="demo-simple-select-label">min price</InputLabel>
          <Select
            sx={{ width: "15vw" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={search_data.minPrice}
            name="minPrice"
            label="Location"
            onChange={handleChange}
          >
            {minPrice.map((element) => {
              return <MenuItem value={element}>{element}</MenuItem>;
            })}
          </Select>
        </div>
        <div style={{ margin: "2em 1em" }}>
          <InputLabel id="demo-simple-select-label">max Price</InputLabel>
          <Select
            sx={{ width: "15vw" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={search_data.maxPrice}
            name="maxPrice"
            label="Location"
            onChange={handleChange}
          >
            {maxPrice.map((element) => {
              return <MenuItem value={element}>{element}</MenuItem>;
            })}
          </Select>
        </div>
        <div style={{ margin: "2em 1em" }}>
          <InputLabel id="demo-simple-select-label">Property Type</InputLabel>
          <Select
            sx={{ width: "15vw" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={search_data.property}
            // value={age}
            name="property"
            label="Location"
            onChange={handleChange}
          >
            {property.map((element) => {
              return <MenuItem value={element}>{element}</MenuItem>;
            })}
          </Select>
        </div>
        <div style={{ margin: "2em 1em", alignSelf: "center" }}>
          <Button
            onClick={handlesearch}
            sx={{ height: "3em" }}
            variant="contained"
            color="primary"
          >
            Search
          </Button>
        </div>
      </Container>
      <Container
        sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        {Data.map((element) => {
          return (
            <div style={{ margin: "1em" }}>
              <MediaCard element={element} />
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default Rent;
