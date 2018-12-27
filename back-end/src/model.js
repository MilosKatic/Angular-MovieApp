"use strict";

var fs = require('fs');

module.exports.load = load;
module.exports.save = save;

function load(fileName, callback) {
    fs.readFile(__dirname + '/db/' + fileName + '.json', function(err, data) {
        if(err) {
            if(err.code === "ENOENT") {
                console.log("File '"+fileName+".json' not found in folder 'db', returning an empty array.");
                callback([]);
                return;
            } else {
                throw err;
            }
        }
		console.log(data.toString());
        callback(JSON.parse(data.toString()));
    });
}

function save(fileName, array) {
    fs.writeFile(__dirname + '/db/' + fileName + '.json', JSON.stringify(array), function(err) {
        if(err) {
            throw err;
        }
    });
}