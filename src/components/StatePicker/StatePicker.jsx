import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./StatePicker.module.css";

import { getStatesList } from "../../api/index";

const StatePicker = ({ changeCountry }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    setFetchedCountries(getStatesList());
  }, [setFetchedCountries]);

  const handleCountryChange = (e) => {
    changeCountry(e.target.value);
  };

  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect defaultValue="" onChange={handleCountryChange}>
        <option value="Nationwide">Nationwide</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default StatePicker;
