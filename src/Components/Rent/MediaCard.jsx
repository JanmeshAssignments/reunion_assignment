import React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const MediaCard = (props) => {
  const { name, img_link, location, price, property } = props.element;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Typography
        sx={{
          fontSize: "1em",
          padding: "0.75em",
          backgroundColor: "#FFB4B4",

          borderRadius: "5%",
        }}
        align="right"
        variant="caption"
      >
        {property}
      </Typography>
      <CardMedia
        component="img"
        height="140"
        image={img_link}
        alt="green iguana"
      />
      <Typography
        sx={{
          fontSize: "1em",
          padding: "0.75em",
          backgroundColor: "#B2A4FF",
          borderRadius: "5%",
        }}
        variant="caption"
      >
        {location}
      </Typography>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <div>
          <Typography variant="h6" color="text.secondary">
            <strong> Price: </strong>&#8377;{price}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default MediaCard;
