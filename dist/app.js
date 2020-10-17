"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var summ = function summ(a, b) {
  return a + b;
};

summ(2, 3);
console.log(summ);

var Hero = /*#__PURE__*/function () {
  function Hero(name) {
    _classCallCheck(this, Hero);

    this._name = name;
  }

  _createClass(Hero, [{
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(newName) {
      this._name = newName;
    }
  }]);

  return Hero;
}();

var h = new Hero('Mango');