import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

export const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, {timestamps: true});