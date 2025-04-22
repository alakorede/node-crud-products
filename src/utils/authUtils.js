const jwt       = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET || "The Big Secret is that there is no Secret to keep!";


function generateToken(payload, jwtToken) {
    const options = {
        expiresIn: jwtToken ? '2h' : '7d'
    };

    return jwt.sign(payload, secretKey, options);
};

function validateToken(token) {
    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return false;
        }
        return true;
    });
};

module.exports = { generateToken, validateToken }