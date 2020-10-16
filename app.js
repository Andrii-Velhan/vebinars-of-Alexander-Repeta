console.log('hello from Node.js');

const Joi = require('joi')
const shortid = require('shortid');

// const passwordSchema = Joi.string().alphanum().min(3).max(30).required();

// console.log(passwordSchema.validate('qqwerr@r'))

console.log(shortid.generate());