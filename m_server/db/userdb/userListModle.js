const db = require('./connection');
const Joi = require('joi');

const userdb = db.get('userdb');

// username
// subject
// message
// imageURL
// createt_at

const schema = Joi.object().keys({
    firstName:Joi.string().alphanum().min(3).max(30).required(),
    lastName:Joi.string().alphanum().min(3).max(30).required(),
    // password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    // access_token: [Joi.string(), Joi.number()],
    // birthyear: Joi.number().integer().min(1900).max(2013),
    email: Joi.string().email({ minDomainAtoms: 2 }),
    // subject:Joi.string().required(),
    // message: Joi.string().max(500).required(),
    // imageURL: Joi.string().uri({
    //     scheme:[
    //         /http?/
    //     ]
    // }),
})

// find
function getAll(){
    return userdb.find();
}

// insert
function create (userdb){
    // if (!message.username) userdb.username = 'Anonymous';

    const result = Joi.validate(userdb, schema);
    if (result.error == null ){
        userdb.created = new Date();
        return result.insert(userdb)
    } else{
        return Promise.reject(result.error);
    }
    // return userdbs.insert(userdb)
}

module.exports = {
    create,
    getAll
};