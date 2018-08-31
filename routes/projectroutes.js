const express = require("express");
const router = express.Router();
const projects = require("../data/helpers/projectModel");

router.get("/", (req, res) => {
    projects
      .get()
      .then(projects => {
        res.status(200).json(projects);
      })
      .catch(err => {
        console.log("error", err);
        res
          .status(500)
          .json({ error: "The project information could not be retrieved." });
      });
  });
  
  router.get("/:id", (req, res) => {
    projects
      .get(req.params.id)
      .then(projects => {
        res.status(200).json(projects);
      })
      .catch(err => {
        console.log("error", err);
        res
          .status(500)
          .json({ error: "The project information could not be retrieved." });
      });
  });
  
  router.get("/:project_id/actions", (req, res) => {
    projects
      .getProjectActions(req.params.project_id)
      .then(projects => {
        res.status(200).json(projects);
      })
      .catch(err => {
        console.log("error", err);
        res
          .status(500)
          .json({ error: "The action information could not be retrieved." });
      });
  });
  
  router.post("/", (req, res) => {
    console.log(req.body);
    projects
      .insert(req.body)
      .then(projects => {
        res.status(201).json(projects);
      })
      .catch(err => {
        console.log("error", err);
        res.status(500).json({ message: "error posting data" });
      });
  });
  
  router.put("/:id", (req, res) => {
    projects
      .update(req.params.id, req.body)
      .then(projects => {
        res.status(200).json(projects);
      })
      .catch(err => {
        console.log("error", err);
        res.status(500).json({ message: "error posting data" });
      });
  });
  
  router.delete("/:id", (req, res) => {
    projects
      .remove(req.params.id)
      .then(projects => {
        res.status(200).json(projects);
      })
      .catch(err => {
        console.log("error", err);
        res.status(500).json({ message: "error deleting data" });
      });
  });
  

module.exports = router;