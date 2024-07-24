import { Card, Typography } from "@mui/joy";
import * as React from "react";

export default function Login() {
  return (
    <div className="login container p-5">
      <Card sx={{ padding: 5, width: "700px" }}>
        <form>
          <Typography
            level="title-lg"
            sx={{
              mb: 2,
              fontFamily: "Roboto Condensed, sans-serif",
              fontSize: "2rem",
            }}
          >
            Login to <span className="text-uppercase ">atp</span>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
