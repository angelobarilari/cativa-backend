const validate = require("validate.js");

const constraints = require("./Constraints");

class AgenciesSchemas {
    saveAgency(email, name, agencyName, phone, observations) {
        const isInvalid = validate(
            { email, name, agencyName, phone, observations },
            {
                email: constraints.email,
                name: constraints.name,
                agencyName: constraints.agencyName,
                phone: constraints.phone,
                observations: constraints.observations,
            }
        );

        return isInvalid;
    }
}

module.exports = new AgenciesSchemas();
