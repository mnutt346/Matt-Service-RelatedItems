const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose
  .connect(
    "mongodb://localhost:27017/projects",
    { useNewUrlParser: true }
  )
  .catch(err => {
    console.log("ERROR CONNECTING TO DB: ", err);
  });

const projectsSchema = new mongoose.Schema(
  {
    name: String,
    blurb: String,
    thumbnail: String
  },
  { collection: "projects" }
);

const projects = mongoose.model("projects", projectsSchema);

const getRelated = cb => {
  let query = projects.aggregate([{ $sample: { size: 5 } }]);
  query.exec().then((err, response) => {
    if (err) {
      cb(err);
    } else {
      cb(response);
    }
  });
};

module.exports = { getRelated };
