const fs = require('fs');
const path = require('path');

const mkdirBoys = path.join(__dirname, 'files', 'boys')
const mkdirGirls = path.join(__dirname, 'files', 'girls')

fs.mkdir(mkdirBoys, {recursive: true}, (e) => {
    console.log(e)
});

fs.mkdir(mkdirGirls, {recursive: true}, (e) => {
    console.log(e)
});

const correctFolder = (currentState, gender, move) => {
    fs.readdir(currentState, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        data.forEach(value => {
            fs.readFile(path.join(currentState, value), (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }

                const item = JSON.parse(data);
                if (item.gender === gender) {
                    fs.rename(path.join(currentState, value), path.join(move, value), (err) => {
                        console.log(err);
                    })
                }
            })
        })
    })
}

correctFolder(mkdirGirls, 'male', mkdirBoys);
correctFolder(mkdirBoys, 'female', mkdirGirls);