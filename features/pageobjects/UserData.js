require('dotenv').config();

    const values = {

        'Почта пользователя': process.env.EMAIL_ROX,
        'Почта пользователя с деньгами': process.env.EMAIL_ROX_CASH,
        'Пароль пользователя': process.env.PASSWORD_ROX
    }

module.exports = { values };