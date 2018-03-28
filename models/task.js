const moongose = require('mongoose');

var TaskSchema = moongose.Schema({
    title: String,
    description: String
});

module.exports = moongose.model('Task', TaskSchema);