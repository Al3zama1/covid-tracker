import React, { useState, useEffect } from "react";
import { Card, Grid, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./Cards.module.css";
import cx from "classnames";
import { fetchCountrySummary } from "../../api/index";

const Cards = ({ state }) => {
  const [summaryDataUSA, setSummaryDataUSA] = useState([]);

  useEffect(() => {
    const fetchAPI = async (state) => {
      setSummaryDataUSA(await fetchCountrySummary(state));
    };

    fetchAPI(state);
  }, [state]);

  if (summaryDataUSA.length === 0) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent="center">
        {/* this is to link our classes together, we can have mutiple classes */}
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <Typography color="textSecondary" gutterBottom>
            COVID-19 Cases
          </Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={summaryDataUSA.actuals.cases}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">
            {`last updated: ${new Date(
              summaryDataUSA.lastUpdatedDate
            ).toDateString()}`}
          </Typography>
          <Typography variant="body2">
            {state === "Nationwide"
              ? "Total number of COVID-19 cases Nationwide"
              : `Total number of COVID-19 cases in the state of ${state}`}
          </Typography>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <Typography color="textSecondary" gutterBottom>
            COVID-19 vaccines
          </Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={summaryDataUSA.actuals.vaccinationsCompleted}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">
            {new Date(summaryDataUSA.lastUpdatedDate).toDateString()}
          </Typography>
          <Typography variant="body2">
            {state === "Nationwide"
              ? "Total number of COVID-19 vaccinations completed Nationwide"
              : `Total COVID-19 vaccinations completed in the state of ${state}`}
          </Typography>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <Typography color="textSecondary" gutterBottom>
            COVID-19 Deaths
          </Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={summaryDataUSA.actuals.deaths}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">
            {new Date(summaryDataUSA.lastUpdatedDate).toDateString()}
          </Typography>
          <Typography variant="body2">
            {state === "Nationwide"
              ? "Total number of deaths cause by COVID-19 Nationwide"
              : `Total number of deaths cause by COVID-19 in the state of ${state}`}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
