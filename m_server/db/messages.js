const db = require('./connection');
const Joi = require('joi');

const messages = db.get('messages');

// username
// subject
// message
// imageURL
// createt_at

const schema = Joi.object().keys({
    username:Joi.string().alphanum().min(3).max(30).required(),
    // password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    // access_token: [Joi.string(), Joi.number()],
    // birthyear: Joi.number().integer().min(1900).max(2013),
    // email: Joi.string().email({ minDomainAtoms: 2 }),
    subject:Joi.string().required(),
    message: Joi.string().max(500).required(),
    imageURL: Joi.string().uri({
        scheme:[
            /http?/
        ]
    }),
})

// find
function getAll(){
    return messages.find();
}

// insert
function create (message){
    // if (!message.username) message.username = 'Anonymous';

    const result = Joi.validate(message, schema);
    if (result.error == null ){
        message.created = new Date();
        return result.insert(message)
    } else{
        return Promise.reject(result.error);
    }
    // return messages.insert(message)
}

module.exports = {
    create,
    getAll
};