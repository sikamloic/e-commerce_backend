const Joi = require('@hapi/joi');
const joi = require('@hapi/joi')

const registerValidation = (data) => {
    const schema = {
        nom : joi.string().required(),
        prenom : joi.string().required(),
        email : joi.string().email().required(),
        ville : joi.string().required(),
        numero : joi.number().required(),
        pwd : joi.string().min(6).required()
    };
    return joi.valid(data, schema);
}

module.exports.registerValidation = registerValidation;