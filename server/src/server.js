const app = require("./app");
const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://matthewBates:2jFx1gt1VSgVgn6p@cluster0.s4aagm0.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 8000;

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

const startServer = async () => {
  await mongoose.connect(MONGO_URL);
};

startServer();
