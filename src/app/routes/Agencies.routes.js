const { Router } = require("express");
const routes = Router();

const AgenciesController = require("../controllers/Agencies.controller");

routes.post("", AgenciesController.saveAgency);

module.exports = routes;
