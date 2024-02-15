import express from "express";
import { PORT, MONGO_URI, CorsOptions } from "./config.js";
import mongoose from "mongoose";
import router from "./router.js";
import cors from "cors";

const app = express();
app.use(express.json()); // parse json bodies
app.use(router); // use the router
// app.use(cors(CorsOptions)); // use cors
app.use(cors()); // allow all origins

// connect to the database
mongoose.connect(MONGO_URI).then(() => {
    console.log("Database connected");
    // listen to the server
    app.listen(process.env.PORT || PORT, () => {
        console.log(`Server is running on port ${process.env.PORT ||PORT}`);
        }
    );
}).catch((err) => {
    console.log("Database connection error", err);
});