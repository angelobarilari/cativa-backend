const { Router } = require("express");
const routes = Router();

const AgenciesRoutes = require("./Agencies.routes")

routes.use("/agencies", AgenciesRoutes)

module.exports = routes;
