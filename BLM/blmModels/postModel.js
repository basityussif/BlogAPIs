import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    category: {
        type: Array
    }
}, {timestamps: true});