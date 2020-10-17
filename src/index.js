import validatePassword from './js/validate-password';
import { addUser } from './js/api-service';
addUser('mAngO')


//console.log(validatePassword('rreeeeeeeeeeeeeeeeee'));
// console.log(validatePassword('qwqeqeqw'));

// import apiService from './js/api-service'
// console.log(apiService);

//------------именованный импорт----------

// import {
//     fetchAllUsers,
//     fetchUserById,
//     updateUserById,
//     x as value,
//     y as name,
// } from './js/api-service'

// console.log(fetchAllUsers);
// console.log(fetchUserById);
// console.log(updateUserById);
// console.log(value);
// console.log(name);

// import * as apiService from './js/api-service'
// console.log(apiService);