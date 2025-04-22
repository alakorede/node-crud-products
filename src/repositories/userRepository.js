const fs = require("fs/promises");
const userModel = require("../models/userModel");
const filePath = "./src/data/authData.json";
const authUtils = require("../utils/authUtils");

async function get(email) {
    try {
        const fileData = JSON.parse(await fs.readFile(filePath, "utf-8"));
        return fileData.find(user => user.email === email);
    } catch (error) {
        console.error("Error reading auth data:", error);
        throw new Error("Failed to retrieve user data.");
    }
};

async function create(userData){
    try {
        console.log(userData)
        userData.token = authUtils.generateToken(userData, true);
        userData.refreshToken = authUtils.generateToken(userData, false);
        const fileData = JSON.parse(await fs.readFile(filePath, "utf-8")) || [];
        fileData.push(userData);
        await fs.writeFile(filePath, JSON.stringify(fileData, null, 2));
        return userData;
    } catch (error) {
        console.error("Error creating new user: ", error);
        throw new Error("Failed to create new user");
    }
};

async function remove(userData){
    try {

    } catch (error) {

    }
};

async function update(userId, userData) {
    try {

    } catch (error) {

    }
}



module.exports = {
    get,
    create,
    remove,
    update
}