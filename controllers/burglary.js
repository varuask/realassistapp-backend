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
    const state = req.query.state;
    const url = `${constants.baseUrl}${state}/all`;
    const params = {
      from: req.query.from,
      to: req.query.to,
      API_KEY: process.env.API_KEY,
    };
    const response = await axios.get(url, { params });
    const graphData = prepareGraphData(response.data.data);
    res.json(graphData);
  } catch (err) {
    res.json(err);
  }
};
