// To connect with your mongoDB database
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://cadienlake:admin@discography.tkl6ivc.mongodb.net/?retryWrites=true&w=majority",
  {
    dbName: "discography",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => (err ? console.log(err) : console.log("Connected to discography database"))
);

// Schema for users of app
const ReleaseSchema = new mongoose.Schema({
  artist: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  listen: {
    type: String,
  },
  role: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
  },
});
const User = mongoose.model("releases", ReleaseSchema);
User.createIndexes();

// For backend and express
const express = require("express");
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
  resp.send("App is Working");
  // You can check backend is working or not by
  // entering http://localhost:5000

  // If you see App is working means
  // backend working properly
});

app.post("/database", async (req, resp) => {
  try {
    const release = new Release(req.body);
    let result = await release.save();
    result = result.toObject();
    if (result) {
      resp.send(req.body);
      console.log(result);
    } else {
      console.log("Release already in database");
    }
  } catch (e) {
    resp.send("Something Went Wrong");
  }
});
app.listen(5000);

