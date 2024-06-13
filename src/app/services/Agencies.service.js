const AppError = require("../errors/AppError");
const Database = require("../../database/index");
const NodemailerManager = require("../../utils/Nodemailer.manager");
const Templates = require("../templates/Templates");

class AgenciesService {
    async saveAgency(email, name, agencyName, phone, observations) {
        try {
            const agencies = Database.readDatabase();

            const emailExists = agencies.some(
                (agency) => agency.email === email
            );

            if (emailExists)
                throw new AppError(400, "Este email já está cadastrado.");

            const newAgency = { email, name, agencyName, phone, observations };

            const template = Templates.marketingTemplate();

            const subject = `Olá, ${name}, estamos entrando em contato com você`;

            await NodemailerManager.sendMail(email, subject, template);

            agencies.push(newAgency);

            Database.writeDatabase(agencies);

            return {
                agency: newAgency,
                message: "Agência cadastrada com sucesso!",
            };
        } catch (error) {
            throw error
        }
    }
}

module.exports = new AgenciesService();
