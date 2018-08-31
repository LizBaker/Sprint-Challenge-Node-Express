const express = require("express");
const router = express.Router();
const actions = require("../data/helpers/actionModel");

router.get("/", (req, res) => {
    actions
      .get()
      .then(actions => {
        res.status(200).json(actions);
      })
      .catch(err => {
        console.log("error", err);
        res
          .status(500)
          .json({ error: "The action information could not be retrieved." });
      });
  });
  
  router.get("/:id", (req, res) => {
    actions
      .get(req.params.id)
      .then(actions => {
        res.status(200).json(actions);
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
    actions
      .insert(req.body)
      .then(actions => {
        res.status(201).json(actions);
      })
      .catch(err => {
        console.log("error", err);
        res.status(500).json({ message: "error posting data" });
      });
  });
  
  router.put("/:id", (req, res) => {
    actions
      .update(req.params.id, req.body)
      .then(actions => {
        res.status(200).json(actions);
      })
      .catch(err => {
        console.log("error", err);
        res.status(500).json({ message: "error posting data" });
      });
  });
  
  router.delete("/:id", (req, res) => {
    actions
      .remove(req.params.id)
      .then(actions => {
        res.status(200).json(actions);
      })
      .catch(err => {
        console.log("error", err);
        res.status(500).json({ message: "error deleting data" });
      });
  });
  

module.exports = router;