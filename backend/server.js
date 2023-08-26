import cors from "cors";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import products from "./data/products.js";
//.js一定要加
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

connectDB(); //connect to MongoDB

const app = express();
// 使用CORS中间件
app.use(cors());
//const port = process.env.PORT;
const port = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);
//any time when we hit the url like /api/products. it will return the productRoutes. No matter what is after the /api/products

app.listen(port, () => console.log(`Server running on port ${port}`));
