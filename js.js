const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./karma.db');

let test = 'SELECT * FROM info WHERE username = ?';

db.each(test, ['test'], (err, row) => {
    if(err){
        console.log(err)
    }
    console.log(row)
});


// karma = 0;
// var dailyTotal = document.getElementById('dailyTotal')

// var quotes = []




// function goodKarma(){
//     karma++
//     dailyTotal.innerHTML = karma
//     if(karma < 0){
//         document.getElementById('circle').style.backgroundColor = 'rgba(204, 109, 109, 0.616)'
//     } else if (karma > 0){
//         document.getElementById('circle').style.backgroundColor = 'rgba(94, 151, 94, 0.459)'
//     } else {
//         document.getElementById('circle').style.backgroundColor = 'rgba(128, 128, 128, 0.199)'
//     }
// }

// function badKarma(){
//     karma--
//     dailyTotal.innerHTML = karma
//     if(karma < 0){
//         document.getElementById('circle').style.backgroundColor = 'rgba(204, 109, 109, 0.616)'
//     } else if (karma > 0){
//         document.getElementById('circle').style.backgroundColor = 'rgba(94, 151, 94, 0.459)'
//     } else {
//         document.getElementById('circle').style.backgroundColor = 'rgba(128, 128, 128, 0.199)'
//     }
// }
