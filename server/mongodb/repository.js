const PostSchema = require("./models/post");
const Repository = {
  FindAll: (req, res) => {
    return PostSchema.find();
  },
};

module.exports = Repository;
