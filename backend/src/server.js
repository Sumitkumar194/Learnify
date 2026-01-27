import app from "./app.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const PORT_URI = process.env.PORT || 5000;

connectDB();

app.listen(PORT_URI, () => {
  console.log(`Server is running on port ${PORT_URI}`);
});
