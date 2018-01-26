var mongoose = require('mongoose');

var TaskSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true,
    ustrict: false
});

module.exports = mongoose.model('Task', TaskSchema);