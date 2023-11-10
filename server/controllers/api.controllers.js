const PostSchema = require("../mongodb/models/post");
const axios = require("axios");
const sample = require("../utils/apiCall");
const sample2 = require("../utils/apiCall2");
const sample3 = require("../utils/apiCall3");

const Controller = {
  GET: (req, res) => {
    res.json({
      message: "This is a test Route",
      success: true,
    });
  },
  POST: async (req, res) => {
    const userPrompt = req.body.prompt;
    sample(userPrompt)
      .then((result) => {
        res.status(200).json({
          message: "API CALLED SUCCESSFULLY",
          data: result,
        });
      })
      .catch((error) => {
        res.status(500).json({
          message: "Something Went Wrong",
          error: error,
        });
      });
  },
  // POST2: async (req, res) => {
  //   const userPrompt = req.body.prompt;
  //   const options = {
  //     method: "POST",
  //     url: "https://open-ai21.p.rapidapi.com/texttoimage2",
  //     headers: {
  //       "content-type": "application/json",
  //       "X-RapidAPI-Key": "37c9509a02msh1e83b2ea8248d3ap18e813jsnb226936328da",
  //       "X-RapidAPI-Host": "open-ai21.p.rapidapi.com",
  //     },
  //     data: { text: userPrompt },
  //   };
  //   try {
  //     const response = await axios.request(options);
  //     res.json({
  //       message: "API CALLED SUCCESSFULLY",
  //       imgData: response.data,
  //     });
  //   } catch (error) {
  //     res.json({
  //       message: "Something Went Wrong",
  //       err: error,
  //     });
  //   }
  // },
  // POST2: async (req, res) => {
  //   const userPrompt = req.body.prompt;
  //   sample2(userPrompt)
  //     .then((result) => {
  //       console.log(result);
  //       res.status(200).json({
  //         message: "API CALLED SUCCESSFULLY",
  //         data: result,
  //       });
  //     })
  //     .catch((error) => {
  //       res.status(500).json({
  //         message: "Something Went Wrong",
  //         error: error,
  //       });
  //     });
  // },
};

module.exports = Controller;
