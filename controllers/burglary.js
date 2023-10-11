const axios = require('axios');
const constants = require('../constants/constants');

const prepareGraphData = (data) => {
  const finalArray = data.map(({ data_year, Burglary }) => {
    return { data_year, Burglary };
  });
  return finalArray;
};

exports.burglaryData = async (req, res, next) => {
  try {
    const url = constants.baseUrl;
    const params = {
      from: constants.from,
      to: constants.to,
      API_KEY: process.env.API_KEY,
    };
    const response = await axios.get(url, { params });
    const graphData = prepareGraphData(response.data.data);
    res.json(graphData);
  } catch (err) {
    res.json(err);
  }
};
