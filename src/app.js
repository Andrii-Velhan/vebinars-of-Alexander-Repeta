// console.log('hello from Node.js');

// const Joi = require('joi')
// const shortid = require('shortid');

// // const passwordSchema = Joi.string().alphanum().min(3).max(30).required();

// // console.log(passwordSchema.validate('qqwerr@r'))

// console.log(shortid.generate());




//------------------  -------------------
//timing: 1:15:00 "dependencies": "express":
//timing: 1:18:00 Серверная часть

// const express = require('express');

// const app = express();

// app.use('*', () => {
//     console.log('Был запрос от браузера')
// });

// const listener = app.listen(4444, () => {
//     console.log(`Веб-сервер запущен на порте ${listener.address().port}`);
// });




//------------------  -------------------
//timing: 1:18:40 настройка транспиляции кода для старых браузеров, babel

const summ = (a, b) =>  a + b;
summ(2, 3);


console.log(summ)

class Hero {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

const h = new Hero('Mango');