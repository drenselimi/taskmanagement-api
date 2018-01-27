var Task = require('../models/task.model.js');

exports.create = function (req, res) {
    // Create and Save a new Task
    if (!req.params.candidateid) {
        res.status(400).send({ message: "candidateId can not be empty" });
    } else {
        if (!req.body.content) {
            res.status(400).send({ message: "Task can not be empty" });
        }
        var task = new Task();
        task.title = req.body.title;
        task.content = req.body.content;
        task.status = req.body.status;
        task.startDate = req.body.startDate;
        task.endDate = req.body.endDate;
        task.candidateId = req.params.candidateid;

        task.save(function (err, data) {
            console.log(data);
            if (err) {
                console.log(err);
                res.status(500).send({ message: "Some error occurred while creating the task." });
            } else {
                res.send(data);
            }
        });
    }
};

exports.findAll = function (req, res) {
    // Retrieve and return all tasks from the database.
    if (!req.params.candidateid) {
        res.status(400).send({ message: "Candidateid can not be empty" });
    } else {
        Task.where('candidateId').equals(req.params.candidateid).find(function (err, tasks) {
            if (err) {
                res.status(500).send({ message: "Some error occurred while retrieving tasks." });
            } else {
                res.send(tasks);
            }
        });
    }
};

exports.findOne = function (req, res) {
    // Find a single task with a id
    if (!req.params.candidateid) {
        res.status(400).send({ message: "Candidateid can not be empty" });
    } else {
        Task.findById(req.params.id, function (err, data) {
            if (err) {
                res.status(500).send({ message: "Could not retrieve task with id " + req.params.id });
            } else {
                res.send(data);
            }
        });
    }
};

exports.update = function (req, res) {
    // Update a task identified by the id in the request
    if (!req.params.candidateid) {
        res.status(400).send({ message: "Candidateid can not be empty" });
    } else {
        Task.findById(req.params.id, function (err, task) {
            if (err) {
                res.status(500).send({ message: "Could not find a task with id " + req.params.id });
            }

            task.title = req.body.title;
            task.content = req.body.content;

            task.save(function (err, data) {
                if (err) {
                    res.status(500).send({ message: "Could not update task with id " + req.params.id });
                } else {
                    res.send(data);
                }
            });
        });
    }
};

exports.delete = function (req, res) {
    // Delete a task with the specified id in the request
    if (!req.params.candidateid) {
        res.status(400).send({ message: "Candidateid can not be empty" });
    } else {
        Task.remove({ _id: req.params.id }, function (err, data) {
            if (err) {
                res.status(500).send({ message: "Could not delete task with id " + req.params.id });
            } else {
                res.send({ message: "task deleted successfully!" })
            }
        });
    }
};