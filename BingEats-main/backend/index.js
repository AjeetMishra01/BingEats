import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import chefRoutes from "./routes/chefRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// Testing
app.get("/", (req, res) => {
  res.send("Hello world !!");
});

app.use("/auth", authRoutes);
app.use("/chef", chefRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
