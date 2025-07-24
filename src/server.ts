import mongoose from "mongoose";
import app from "./app.js";

const { PORT, DB_HOST } = process.env;

if (!PORT || !DB_HOST) {
  console.error("Environment variables error");
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
