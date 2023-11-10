const Repository = require("../mongodb/repository");
const PostSchema = require("./post.controllers");

const Controller = {
  GET: (req, res) => {
    Repository.FindAll()
      .then((result) => {
        res.json({
          success: true,
          data: result,
        });
      })
      .catch((Error) => {
        res.json({
          success: false,
          message: "Oops Something Went Wrong",
          error: Error,
        });
      });
  },
};

module.exports = Controller;
