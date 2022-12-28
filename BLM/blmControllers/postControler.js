import mongoose from "mongoose";
import { postSchema } from "../blmModels/postModel";

const Post = mongoose.model('Post', postSchema);

export const addNewPost = (req, res) => {
    let newPost = new Post(req.body);
    newPost.save((err, post) => {
        if(err){
            res.send(err);
        }
        res.json(post);
    });
}

export const getAllPosts = (req, res) => {
    Post.find({}, (err, post) => {
        if(err){
            res.send(err);
        }
        res.json(post);
    });
}

export const updatePost = (req, res) => {
    Post.findOneAndUpdate({ _id: req.params.postID}, req.body, { new: true, useFindAndModify: false}, (err, post) => {
        if(err){
            req.send(err);
        }
        res.json(post);
    });
}

export const deletePost = (req, res) =>{
    Post.remove({_id: req.params.postID}, (err, post) =>{
        if(err){
        res.send(err)
        }
        res.json({ message: "Post deleted from the DBs"});
    });
}