const express = require("express");
const libraryModel = require("../Schema/LibrarySchema");
const Router = express.Router();

Router.get("/getrecentlyaddedlibraryName", async (req, res) => {
  try {
    const data = await libraryModel.find({}, "name").sort({ _id: -1 }).limit(4);
    res.json(data);
  } catch (error) {
    res.send(error);
  }
});

Router.get("/getalllibrariesname", async (req, res) => {
  try {
    const allData = await libraryModel.find({}, "name");
    res.json(allData);
  } catch (error) {
    res.status(500).send(error);
  }
});

Router.get("/getbyid", async (req, res) => {
  const { id } = req.query;
  try {
    const data = await libraryModel.find({ _id: id });
    res.json(data);
  } catch (error) {}
});

Router.get("/onlyid", async (req, res) => {
  try {
    const data = await libraryModel.find({}, "_id");
    res.json(data);
  } catch (error) {}
});

Router.post("/addlibrary", async (req, res) => {
  const data = req.body;
  try {
    const res = await libraryModel.create(data);
    res.json(res);
  } catch (error) {
    res.send(error);
  }
});

Router.get("/search", async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const result = await libraryModel.find({"name":{$regex:name}},"name") 
      res.json(result)
    }
    res.send([])
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = Router;
