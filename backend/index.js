import express from "express";
import { PORT, MONGO_URI } from "./config.js";
import mongoose from "mongoose";
import { People } from "./models/peopleModel.js";

const app = express();
app.use(express.json()); // parse json bodies

// routes 
app.post("/people", async (req, res) => {
    try{
        const people = await People.create(req.body);
        return res.status(201).json({ people });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
// get all people
app.get("/people", async (req, res) => {
    try {
        const people = await People.find();
        return res.status(200).json({ people });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
// get people by name
app.get("/people/:name", async (req, res) => {
    try {
        const { name } = req.params;
        const people = await People.find({ name: name });
        return res.status(200).json({ people });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


// connect to the database
mongoose.connect(MONGO_URI).then(() => {
    console.log("Database connected");
    // listen to the server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        }
    );
}).catch((err) => {
    console.log("Database connection error", err);
});