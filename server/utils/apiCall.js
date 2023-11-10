const axios = require("axios");
const fs = require("fs");

const sample = async (data) => {
  const options = {
    method: "GET",
    url: "https://text-to-image7.p.rapidapi.com/",
    params: {
      prompt: data,
      batch_size: "1",
    },
    headers: {
      "X-RapidAPI-Key": "778b4dde9cmsh37b1bacf6630756p1d7d3ajsnd53b757d3d26",
      "X-RapidAPI-Host": "text-to-image7.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

module.exports = sample;
