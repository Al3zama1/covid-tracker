import React from "react";
import { Cards, Chart, StatePicker } from "./components/index";
import styles from "./App.module.css";
import { fetchSingleStateDailyData, fetchUSDailyData } from "./api/index";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      state: "",
    };
  }

  async componentDidMount() {
    const data = await fetchUSDailyData();

    this.setState({ data: data, state: "Nationwide" });
  }

  handleCountryChange = async (state) => {
    let fetchedResults;
    if (state !== "Nationwide") {
      fetchedResults = await fetchSingleStateDailyData(state);
    } else {
      fetchedResults = await fetchUSDailyData();
    }

    this.setState({ data: fetchedResults, state: state });
  };

  render() {
    const { data, state } = this.state;
    return (
      <div className={styles.container}>
        <h1>COVID-19 And Vaccinations Tracking System</h1>
        <Cards state={state} />
        <StatePicker changeCountry={this.handleCountryChange} />
        <Chart state={state} data={data} />
      </div>
    );
  }
}

export default App;
