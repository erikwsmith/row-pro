import dotenv from 'dotenv';
import jsonwebtoken from 'jsonwebtoken';

const createSecretToken = (id) => {
    return jsonwebtoken.sign( { id } , process.env.TOKEN_KEY, {
        expiresIn: 3 * 24 * 60 * 60
    });
};

export default createSecretToken;