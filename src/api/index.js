import axios from "axios";

export const fetchCountrySummary = async (state) => {
  let url;
  if (state === "Nationwide" || state === "") {
    url =
      "https://api.covidactnow.org/v2/country/US.json?apiKey=e3ec9be7c8414d36aef13addc61143df";
  } else {
    url = `https://api.covidactnow.org/v2/state/${state}.json?apiKey=e3ec9be7c8414d36aef13addc61143df`;
  }

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUSDailyData = async () => {
  try {
    const {
      data: { actualsTimeseries },
    } = await axios.get(
      "https://api.covidactnow.org/v2/country/US.timeseries.json?apiKey=e3ec9be7c8414d36aef13addc61143df"
    );

    return actualsTimeseries;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingleStateDailyData = async (state) => {
  const url = `https://api.covidactnow.org/v2/state/${state}.timeseries.json?apiKey=e3ec9be7c8414d36aef13addc61143df`;

  try {
    const {
      data: { actualsTimeseries },
    } = await axios.get(url);
    return actualsTimeseries;
  } catch (error) {
    console.log(error);
  }
};

const statesList = {
  AL: "Alabama",
  AK: "Alaska",
  AS: "American Samoa",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  DC: "District Of Columbia",
  FM: "Federated States Of Micronesia",
  FL: "Florida",
  GA: "Georgia",
  GU: "Guam",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MH: "Marshall Islands",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  MP: "Northern Mariana Islands",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PW: "Palau",
  PA: "Pennsylvania",
  PR: "Puerto Rico",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VT: "Vermont",
  VI: "Virgin Islands",
  VA: "Virginia",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming",
};

export const getStatesList = () => {
  return Object.keys(statesList);
};
