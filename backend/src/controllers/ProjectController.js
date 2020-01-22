const fs = require('fs'); //filesystem
const Project = require('../models/Project');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(req, res) {
        const projects = await Project.find();

        return res.json(projects);
    },

    async store(req, res) {
        const { name, techs, description, link, img } = req.body;

        let project = await Project.findOne({ name });

        if (!project) {
            const techsArray = parseStringAsArray(techs);

            // Converts image to binary and them to a base64 string
            // const binaryData = fs.readFileSync(img);
            // const base64String = new Buffer(binaryData).toString("base64");

            project = await Project.create({
                name,
                techs: techsArray,
                description,
                link,
                img
            });
        }

        return res.json(project);
    }
}