// const fetchAllUsers = () => {
//     console.log('fetchAllUsers')
// }

// const fetchUserById = id => {
//     console.log('fetchUserById')
// }

// const updateUserById = (id) => {
//     console.log('updateUserById')
// }

// export default {fetchAllUsers, fetchUserById, updateUserById}


//------------именованный експорт----------

import shortid from 'shortid';
export const addUser = name => {
    const user = {
        id: shortid.generate(),
        name
    }
    console.log(user)
};

export const fetchAllUsers = () => {
    console.log('fetchAllUsers')
}

export const fetchUserById = id => {
    console.log('fetchUserById')
}

export const updateUserById = (id) => {
    console.log('updateUserById')
}

export const x = 555;

export const y = 'Mango';

export default {fetchAllUsers, fetchUserById, updateUserById}