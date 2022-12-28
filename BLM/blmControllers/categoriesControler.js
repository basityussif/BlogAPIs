import mongoose from "mongoose";
import {categorySchema} from '../blmModels/categoriesModel';

const Category = mongoose.model('Category', categorySchema);

export const addNewCategory = (req, res) => {
    let newCategory = new Category(req.body);
    newCategory.save((err, category) => {
        if(err){
            res.send(err);
        }
        res.json(category);
    });
}

export const getAllCategory = (req, res) => {
    Category.find((err, category) => {
        if(err){
            res.send(err);
        }
        res.json(category);
    });
}

export const updateCategory = (req, res) => {
    Category.findOneAndUpdate({ _id: req.params.categryID}, req.body, {new: true, useFindAndModify: false}, (err, category)=>{
        if(err){
            res.send(err);
        }
        res.json(category);
    })
}