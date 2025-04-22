const authMiddleware = require("../middlewares/authMiddleware");
const authService = require("../services/authService");
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
        return res.status(201).json(JSON.stringify(userCreated)).send('Usuário registrado com sucesso!');
    }
    
    return res.status(400).json({ message: 'Erro ao criar usuário' });

// Valide os dados de entrada(nome de usuário, email, senha) usando Joi.  - OK
// Verifique se o usuário já existe no seu "banco de dados"
// Faça o hash da senha usando bcrypt.
// Salve o novo usuário.
// Gere um Access Token e um Refresh Token usando jsonwebtoken.
// Responda com os tokens.
}

async function login(user, password,) {

// Valide os dados de entrada(email, senha) usando Joi.
// Verifique se o usuário existe.
// Compare a senha fornecida com o hash armazenado usando bcrypt.compare().
// Se as credenciais forem válidas, gere um novo Access Token e Refresh Token.
// Responda com os tokens.
}

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