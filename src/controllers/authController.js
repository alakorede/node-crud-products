const authMiddleware = require("../middlewares/authMiddleware");
const authService = require("../services/authService");
const authUtils = require("../utils/authUtils");
const Joi = require("joi")

const userSchema = Joi.object({
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    email: Joi.string().email().required()
});


async function createUser(req,res) {
    const { error, value } = userSchema.validate(req.body);

    if (error){
        return res.status(400).json({ error: error.details });
    }

    const userCreated = await authService.createUser(value);

    if (userCreated) {
        return res.status(201).json(userCreated)
    }
    
    return res.status(400).json({ message: 'Error on user creation' });
};

async function login(req, res) {
    const { error, value } = userSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details });
    }
    console.log(value);
    let isUserValid = await authService.getUser(value);
    console.log(isUserValid)
    if (!isUserValid) {
        return res.status(401).json({ error: "Not Authorized"});
    }

    isUserValid = await authUtils.createTokens(isUserValid);

    await authService.updateUser(isUserValid);

    let responseObject = {token: isUserValid.token, refreshToken: isUserValid.refreshToken};
    
    return res.status(200).json(responseObject)
};

async function refresh(refreshToken){
// Receba o Refresh Token no corpo da requisição(ou via cookie).
// Valide se o Refresh Token foi fornecido.
// Verifique a validade do Refresh Token usando jsonwebtoken.verify() com a chave secreta do refresh token.
// Se o token for válido, gere um novo Access Token(e, opcionalmente, um novo Refresh Token).
// Responda com o novo Access Token(e o novo Refresh Token, se gerado).
// Importante: Você precisará de um mecanismo para armazenar e verificar os Refresh Tokens(geralmente em um banco de dados associado aos usuários).Para simplificar no início, você pode armazená - los em um array em memória, mas lembre - se que isso não é escalável nem persistente.
}

module.exports = {
    createUser,
    login,
    refresh
}