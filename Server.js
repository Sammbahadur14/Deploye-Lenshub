import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./Config/db.js";
import authRoute from "./Routes/authRoute.js";
import categoryRoutes from "./Routes/CategoryRoutes.js";
import productRoute from "./Routes/productRoute.js"
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// rest api
const app = express();

//Config env
dotenv.config();

//Databse config
connectDB();

//esmodule fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, '/client/build')));

//Routes 
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoute);

//Rest api
app.use("*", function (req, res){
    res.sendFile(path.join(__dirname, 'client/build/index.html'))
})

app.get("/", (req, res) => {
    res.send("<h3>Hello from Server !!<h3/>");
});


//port
const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));