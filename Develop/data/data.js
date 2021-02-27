const newNote = require("../public/app");

const storedData = [
    { 
        title : "",
        text : "",
    }
];

function addData() {
storedData.push(newNote);
storedData.forEach((item, i) => {
    item.id = i + 1;
  });
};
addData();


module.exports = storedData;