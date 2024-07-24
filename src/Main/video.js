import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

export default function VideoBox() {
  return (
    <Card sx={{ flexGrow: 1, width: "400px" }}>
      <CardCover>
        <video
          autoPlay
          loop
          muted
          poster="https://assets.codepen.io/6093409/river.jpg"
        >
          <source
            src="https://assets.codepen.io/6093409/river.mp4"
            type="video/mp4"
          />
        </video>
      </CardCover>
      <CardContent>
        <Typography
          level="body-lg"
          fontWeight="lg"
          textColor="#fff"
          mt={{ xs: 12, sm: 18 }}
        >
          Video
        </Typography>
      </CardContent>
    </Card>
  );
}
