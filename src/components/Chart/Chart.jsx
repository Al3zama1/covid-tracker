import React from "react";
import { Line } from "react-chartjs-2";

import styles from "./Chart.module.css";

const Chart = ({ state, data }) => {
  const dailyData = data;

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) =>
          new Date(date).toLocaleDateString()
        ),
        datasets: [
          {
            data: dailyData.map((data) => data.cases),
            label: "Total Infections",
            borderColor: "rgb(0, 0, 255)",
            backgroundColor: "rgba(0, 0, 255, 0.5)",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.newCases),
            label: "New Infections",
            borderColor: "rgb(240, 0, 255)",
            backgroundColor: "rgba(240, 0, 255, 0.5)",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.vaccinationsCompleted),
            label: "Total Vaccines Completed",
            borderColor: "rgb(0, 255, 0)",
            backgroundColor: "rgba(0, 255, 0, 0.5)",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.deaths),
            label: "Total Deaths",
            borderColor: "rgb(255, 0, 0)",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.newDeaths),
            label: "New Deaths",
            borderColor: "rgb(255, 0, 100)",
            backgroundColor: "rgba(255, 0, 100, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>
      <h1>
        {state === "Nationwide"
          ? "COVID-19 And Vaccinations History Across The United States"
          : "COVID-19 And Vaccinations History By State"}
      </h1>
      {lineChart}
    </div>
  );
};

export default Chart;
