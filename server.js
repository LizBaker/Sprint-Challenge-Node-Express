const express = require("express");
const server = express();
const actions = require("./data/helpers/actionModel");
const projects = require("./data/helpers/projectModel");

server.use(express.json());

server.get("/", (req, res) => {
  res.send("Hello");
});

//==============     action routes     ==============

server.get("/actions", (req, res) => {
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

server.get("/actions/:id", (req, res) => {
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

server.post("/actions", (req, res) => {
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

server.put("/actions/:id", (req, res) => {
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

server.delete("/actions/:id", (req, res) => {
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

//==============    project routes    ==============

server.get("/projects", (req, res) => {
  projects
    .get()
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

server.get("/projects/:id", (req, res) => {
  projects
    .get(req.params.id)
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

server.get("/projects/:project_id/actions", (req, res) => {
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

server.post("/projects", (req, res) => {
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

server.put("/projects/:id", (req, res) => {
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

server.delete("/projects/:id", (req, res) => {
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

server.listen(5000, () => console.log("~API Listening on 5k~"));
