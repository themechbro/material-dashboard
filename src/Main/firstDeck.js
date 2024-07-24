import * as React from "react";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import CircularProgress from "@mui/joy/CircularProgress";
import Typography from "@mui/joy/Typography";
import SvgIcon from "@mui/joy/SvgIcon";
import deckData from "./deckdata";

const data1 = deckData;
console.log(data1);

export default function Deck() {
  return (
    <div className="deck ">
      {data1.map((i) => {
        return (
          <Card
            variant="solid"
            color="primary"
            invertedColors
            sx={{
              padding: 5,
              backgroundColor: "rgba(255, 255, 255, 0.66)",
              backdropFilter: "blur(10px) saturate(200%)",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.125)",
              WebkitBackdropFilter: "blur(10px) saturate(200%)",
              boxShadow: "9px -1px 12px -5px rgba(0,0,0,0.48)",
              WebkitBoxShadow: "9px -1px 12px -5px rgba(0,0,0,0.48)",
              MozBoxShadow: "9px -1px 12px -5px rgba(0,0,0,0.48)",
            }}
          >
            <CardContent orientation="horizontal">
              <CardContent>
                <Typography
                  level="body-md"
                  sx={{
                    fontFamily: "Roboto Condensed, sans-serif",
                    color: "grey",
                  }}
                >
                  {i.heading}
                </Typography>
                <Typography
                  level="h2"
                  sx={{
                    fontFamily: "Roboto Condensed, sans-serif",
                    color: " rgba(19, 19, 99, 0.66)",
                  }}
                >
                  {i.count}
                </Typography>
                <Typography
                  level="title-lg"
                  sx={{
                    fontWeight: "light",
                    fontFamily: "Roboto Condensed, sans-serif",
                    color: "#000",
                  }}
                >
                  <Typography sx={{ color: `${i.color}` }}>
                    {i.change}
                  </Typography>
                  % from last {i.time}
                </Typography>
              </CardContent>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
