// import fetch from "node-fetch";

// const url = "https://open-ai21.p.rapidapi.com/texttoimage2";

// const simple = async () => {
//   const options = {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//       "X-RapidAPI-Key": "f1b1f28d46msh345fc8b0ff9065cp1cb9e0jsn1f404ffb6117",
//       "X-RapidAPI-Host": "open-ai21.p.rapidapi.com",
//     },
//     body: { text: "dog" },
//   };
//   try {
//     const response = await fetch(url, options);
//     const result = await response;
//     console.log(result);
//     return result;
//   } catch (error) {
//     console.error(error);
//     return error;
//   }
// };
// simple();
// //   .then((data) => {
// //     console.log(data);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// const axios = require("axios");
// const fs = require("fs");
// const sharp = require("sharp");

// const sample2 = async () => {
//   const options = {
//     method: "POST",
//     url: "https://open-ai21.p.rapidapi.com/texttoimage2",
//     headers: {
//       "content-type": "application/json",
//       "X-RapidAPI-Key": "f1b1f28d46msh345fc8b0ff9065cp1cb9e0jsn1f404ffb6117",
//       "X-RapidAPI-Host": "open-ai21.p.rapidapi.com",
//     },
//     data: { text: "a dog with football" },
//   };

//   try {
//     const response = await axios.request(options);
//     const imgData = response.data;

//     // const binaryData = Buffer.from(imgData, "binary");
//     // const outputPath = "output";
//     // sharp(binaryData).toFile(outputPath, (err, info) => {
//     //   if (err) {
//     //     console.error(err);
//     //   } else {
//     //     console.log("Image saved successfully:", info);
//     //   }
//     // });
//     console.log(imgData);
//     // const imageDataBuffer = Buffer.from(imgData, "utf-16le");
//     // const filePath = "image.png";
//     // fs.writeFile(filePath, imageDataBuffer, (err, data) => {
//     //   if (err) {
//     //     console.log(err);
//     //     return;
//     //   } else {
//     //     console.log("Success");
//     //   }
//     // });
//   } catch (error) {
//     console.error(error);
//     return error;
//   }
// };
// module.exports = sample2;
