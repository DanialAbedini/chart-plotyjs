import React, { useContext } from "react";
import Plot from "react-plotly.js";

import { DataContext } from "./SetData";

const ChatComponent = () => {
  const datanumber = useContext(DataContext);
  return (
    <>
      <Plot
      config={{
        displayModeBar:true,
        modeBarButtonsToRemove:["resetScale2d"],
        responsive:true
      }}
        data={[
          {
            type: "scatter",
            mode: "lines",
            name: datanumber[0].name,
            x: datanumber[0].dates,
            y: datanumber[0].prices,
          },
          {
            type: "scatter",
            mode: "lines",
            name: datanumber[1].name,
            x: datanumber[1].dates,
            y: datanumber[1].prices,
          },
          {
            type: "scatter",
            mode: "lines",
            name: datanumber[2].name,
            x: datanumber[2].dates,
            y: datanumber[2].prices,
          },
        ]}
        layout={{
          width: 1200,
          height: 700,
          title: "Danial Abedini",
          xaxis: {
            range: ["2015-01-01", "2021-12-31"],
            rangeselector: {
              buttons: [
                {
                  count: 6,
                  label: "6m",
                  step: "month",
                  stepmode: "backwards",
                },
                {
                  count: 36,
                  label: "1y",
                  step: "month",
                  stepmode: "backward",
                },

                { step: "all" },
              ],
            },
            rangeslider: { range: ["2015-01-01", "2021-12-31"] },
            type: "date",
            title: "Dates",
            titlefont: {
              family: "Arial, sans-serif",
              size: 18,
              color: "lightgrey",
            },
          },
          yaxis: {
            autorange: true,
            type: "linear",
            title: "Prices",
            titlefont: {
              family: "Arial, sans-serif",
              size: 18,
              color: "lightgrey",
            },
          },
        }}
        onClick={(e) => {
          const copy = `
          name : ${e.points[0].data.name}
          price : ${e.points[0].y}$
          date : ${e.points[0].y}
          `;
          navigator.clipboard.writeText(copy);
          alert(`${copy} 
          has been copied on your clipboard`);
        }}
      />
    </>
  );
};

export default ChatComponent;
