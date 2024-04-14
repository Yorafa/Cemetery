import express from "express";
import { People } from "./models/peopleModel.js";

const router = express.Router();

/**
 * Returns a hash code from a string
 * @param  {String} str The string to hash.
 * @return {Number}    A 32bit integer
 */
function hashCode(str) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

function hashId(data) {
    return hashCode(JSON.stringify(data));
}

// routes 
router.post("/people", async (req, res) => {
    try {
        const data = req.body;
        const id = hashId(data);
        // find if exist same data
        const existingItem = await People.findOne({ id: id });
        if (existingItem) {
            return res.status(400).json({ error: 'Item with the same name already exists.' });
        }
        const people = await People.create({ ...data, id });
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

// get random person
router.get("/people/random", async (req, res) => {
    try {
        const people = await People.aggregate([{ $sample: { size: 3 } }]);
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