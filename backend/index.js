import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// Testing
app.get("/", (req, res) => {
  res.send("Hello world !!");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
