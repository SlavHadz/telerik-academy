/*globals dirname*/

const fs = require('fs');
const printer = require('./utils/printer');
const fetch = require('node-fetch');

fs.readdirSync(__dirname).
forEach((file) => {
    printer.print(file);
})