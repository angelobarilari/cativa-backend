const constraints = {
    email: {
        presence: {
            allowEmpty: false,
            message: "deve ser informado",
        },
        type: {
            type: "string",
            message: "deve ser uma string",
        },
        email: {
            email: true,
            message: "deve ser um email válido",
        },
        length: {
            maximum: 255,
            message: "deve ter no máximo 255 carácteres",
        },
    },

    name: {
        presence: {
            allowEmpty: false,
            message: "deve ser informado",
        },
        type: {
            type: "string",
            message: "deve ser uma string",
        },
    },

    agencyName: {
        presence: {
            allowEmpty: false,
            message: "deve ser informado",
        },
        type: {
            type: "string",
            message: "deve ser uma string",
        },
        length: {
            maximum: 255,
            message: "deve ter no máximo 255 carácteres",
        },
    },

    phone: {
        presence: {
            allowEmpty: false,
            message: "deve ser informado",
        },
        type: {
            type: "string",
            message: "deve ser uma string",
        },
        format: {
            pattern: /^\(\d{2}\) \d{5}-\d{4}$/,
            message: "deve estar no formato (xx) xxxxx-xxxx",
        },
    },

    text: {
        presence: {
            allowEmpty: true,
            message: "deve ser informado",
        },
        type: {
            type: "string",
            message: "deve ser uma string",
        },
    },
};

module.exports = constraints;
