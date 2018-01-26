module.exports = function(app) {

    var tasks = require('../controllers/task.controller.js');

    // Create a new Task
    app.post('/:candidateid/tasks', tasks.create);

    // Retrieve all Notes
    app.get('/:candidateid/tasks', tasks.findAll);

    // Retrieve a single Task with id
    app.get('/:candidateid/tasks/:id', tasks.findOne);

    // Update a Task with id
    app.put('/:candidateid/tasks/:id', tasks.update);

    // Delete a Task with id
    app.delete('/:candidateid/tasks/:id', tasks.delete);
}