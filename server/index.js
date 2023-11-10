const fetch = require("node-fetch");

const url = "https://open-ai21.p.rapidapi.com/texttoimage2";
const sample = async () => {
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "37c9509a02msh1e83b2ea8248d3ap18e813jsnb226936328da",
      "X-RapidAPI-Host": "open-ai21.p.rapidapi.com",
    },
    body: { text: "dog" },
  };

  try {
    const response = await fetch(
      "https://open-ai21.p.rapidapi.com/texttoimage2",
      options
    );
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
sample();
