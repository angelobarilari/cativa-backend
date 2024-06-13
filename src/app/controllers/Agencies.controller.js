const AppError = require("../errors/AppError");
const AgenciesService = require("../services/Agencies.service");
const AgenciesSchemas = require("../schemas/Agencies.schemas");

class AgenciesController {
    async saveAgency(req, res) {
        try {
            const { email, name, agencyName, phone, observations } = req.body;

            const isInvalid = AgenciesSchemas.saveAgency(
                email,
                name,
                agencyName,
                phone,
                observations
            );

            if (isInvalid) throw new AppError(400, isInvalid);

            const response = await AgenciesService.saveAgency(
                email,
                name,
                agencyName,
                phone,
                observations
            );

            return res.status(201).json(response);
        } catch (error) {
            return res
                .status(error.statusCode || 400)
                .json({ message: error.message });
        }
    }
}

module.exports = new AgenciesController();
