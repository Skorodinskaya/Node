// const builder = require('./helper/user-builder');
//
// let user = builder.createUser('Anna',20);
//
// console.log(user);

const fs = require('fs');

fs.readFile(`${__dirname}/helper/user-builder.js`, ((err, data )=> {
    if(err) {
        console.log(err)
        return;
    }
    console.log(data.toString())
}));