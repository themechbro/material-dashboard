import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Card } from "@mui/joy";

export default function Graph() {
  return (
    <div className="container ">
      <Card
        sx={{
          width: "600px",
          boxShadow: "9px -1px 12px -5px rgba(0,0,0,0.48)",
          WebkitBoxShadow: "9px -1px 12px -5px rgba(0,0,0,0.48)",
          MozBoxShadow: "9px -1px 12px -5px rgba(0,0,0,0.48)",
        }}
      >
        <LineChart
          xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
          series={[
            {
              data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
              showMark: ({ index }) => index % 2 === 0,
            },
          ]}
          sx={{ width: "600px", height: "700px" }}
        />
      </Card>
    </div>
  );
}
