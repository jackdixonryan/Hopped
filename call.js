const fs = require('fs');
let input = process.argv[2];
let argument = process.argv.slice(3).join(' ');

// switch(argument){
//     case 'searchName':
//     case: 'searchBitters':
// }

fs.readFile('hops.JSON', 'utf-8', function(err, res){
    if (err) throw err;
    const json = JSON.parse(res);
    for (let i = 0; i < json.search.length; i++){
        if ('alpha' in json.search[i]){
            let minAlpha = json.search[i].alpha.min;
            let maxAlpha = json.search[i].alpha.max;
            console.log('------------------------');
            console.log('Name:', json.search[i].name)
            console.log('Minumum alpha acid:', minAlpha);
            console.log('Maximum alpha acid:', maxAlpha);
            console.log('------------------------\n');
        }
    }
});