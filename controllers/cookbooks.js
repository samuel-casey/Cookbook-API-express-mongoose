const express = require("express");
const router = express.Router();
// Require the Cookbook model.
const Cookbook = require("../models/Cookbook");
// Write the controller to list all cookbooks
const getAllCookbooks = (req, res) => {
  Cookbook.find({}).then((cookbooks) => {
    res.json(cookbooks);
  });
};
// Write the controller to get cookbook by title
const getCookbookByTitle = (req, res) => {
  Cookbook.find({ title: req.params.title }).then((cookbook) => {
    res.json(cookbook);
  });
};
// Write the controller to get cookbook by year published
const getCookbooksByYear = (req, res) => {
  Cookbook.find({ yearPublished: req.params.year }).then((cookbooks) => {
    res.json(cookbooks);
  });
};
// Write the controller to create a cookbook
const createCookbook = (req, res) => {
  Cookbook.create(req.body).then((cookbook) => {
    res.json(cookbook);
  });
};
// Write the controller to update a cookbook
const updateCookbook = (req, res) => {
  Cookbook.findByIdAndUpdate(req.params.id, req.body).then((cookbook) => {
    res.json(cookbook);
  });
};
// Write the controller to delete the cookbook by title
const deleteCookbook = (req, res) => {
  Cookbook.deleteOne({ _id: req.params.id }).then((cookbook) => {
    res.json(cookbook);
  });
};
//export controller functions
module.exports = {
  updateCookbook,
  deleteCookbook,
  createCookbook,
  getCookbookByTitle,
  getCookbooksByYear,
  getAllCookbooks,
};
