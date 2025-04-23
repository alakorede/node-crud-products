const fs = require("fs/promises");
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
        userData = await authUtils.createTokens(userData);
        console.log(userData)
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

async function update(userData) {
    try {
        const fileData = JSON.parse(await fs.readFile(filePath, "utf-8"));
        const index = fileData.findIndex(user => user.email === userData.email);
        if (index !== -1) {
            fileData[index] = { ...fileData[index], ...userData };
            await fs.writeFile(filePath, JSON.stringify(fileData, null, 2));
            return fileData[index];
        }
        return false;
    } catch (error) {
        console.error("Error updating user: ", error);
        throw new Error("Failed to update user");
    }
}



module.exports = {
    get,
    create,
    remove,
    update
}