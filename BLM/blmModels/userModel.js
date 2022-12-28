import mongoose, { mongo } from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

export const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hashPassword: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: " "
    }
}, {timestamps: true});


userSchema.methods.comparePassword = (password, hashPassword) =>{
    return bcrypt.compareSync(password, hashPassword);
}