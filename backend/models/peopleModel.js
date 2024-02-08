import mongoose from 'mongoose';

const peopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    timeline: {
        birth: {
            type: Date,
            required: true,
        },
        death: {
            type: Date,
            required: true,
        },
    },
    epitaph: {
        type: String,
        required: true,
    },
});

export const People = mongoose.model('People', peopleSchema);