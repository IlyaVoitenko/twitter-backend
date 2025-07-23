const mongoose = require("mongoose");
const app = require("./app");

const { PORT, DB_HOST } = process.env;
if (!PORT || !DB_HOST) {
  console.error("Environment variables PORT and DB_HOST must be set.");
  process.exit(1);
}
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((err: Error) => {
    console.error("Error:", err.message);
    process.exit(1);
  });
