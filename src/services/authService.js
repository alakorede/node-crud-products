
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const authUtils = require("../utils/authUtils");
const userRespository = require("../repositories/userRepository");


async function createUser(userData) {
    const user = await userRespository.get(userData.email);
    if (user) {
        throw new Error("User already exists");
    } else {
        const saltRounds = 10;

        bcrypt.hash(userData.password, saltRounds, function (err, hash) {
            userData.password = hash;
        });

        const newUser = await userRespository.create(userData);
        
        return newUser;
    }
}

async function getUser(email) {
    return await userRespository.get(userData.email);
}


module.exports = {
    createUser,
    getUser
}