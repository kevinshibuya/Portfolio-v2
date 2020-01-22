const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: String,
    techs: [String],
    description: String,
    link: String,
    img: String
});

module.exports = mongoose.model('Project', ProjectSchema);