import express from "express";
import { People } from "./models/peopleModel.js";

const router = express.Router();

// routes 
router.post("/people", async (req, res) => {
    try{
        const people = await People.create(req.body);
        return res.status(201).json({ people });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
// get all people
router.get("/people", async (req, res) => {
    try {
        const people = await People.find();
        return res.status(200).json({ people });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
// get people by name
router.get("/people/:name", async (req, res) => {
    try {
        const { name } = req.params;
        const people = await People.find({ name: name });
        return res.status(200).json({ people });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default router;