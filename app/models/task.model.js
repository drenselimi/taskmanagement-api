var mongoose = require('mongoose');

var TaskSchema = mongoose.Schema({
    title: String,
    description: String,
    startDate: Date,
    endDate: Date,
    status: String

}, {
        timestamps: true,
        ustrict: false
    });

module.exports = mongoose.model('Task', TaskSchema);