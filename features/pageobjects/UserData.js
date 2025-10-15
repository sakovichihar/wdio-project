require('dotenv').config();

    const values = {

        'Почта пользователя': process.env.EMAIL_ROX,
        'Пароль пользователя': process.env.PASSWORD_ROX
    }

module.exports = { values };