var json = require('read-data').json;
var data = json.sync('data.json');
console.log(data); //displays whole json


for(item in data.items){
    console.log(data.items[item].fname + " " + data.items[item].age);
} //displays first name and age
