// challenge 1 :
// console.log('HELLO WORLD')



// challenge 2 :
// var args = process.argv.slice(2);
// var x = args.reduce(function(a,b) {
//     return +a + +b
// });
// console.log




// challenge 3 :
// var fs = require('fs');
// var file = process.argv[2];
// var output = fs.readFileSync(file);
// output = output.toString().split('\n');
// console.log(output.length - 1);




// challenge 4 :
// var fs = require('fs');
// var file = process .argv[2];
// output = fs.readFile(file, 'utf8', function(err, content){
//     console.log(content.split('\n').length - 1);
// });




// challenge 5 :
// var fs = require('fs');
// var path = require('path');
// var pathName = process.argv[2];
// var fileExt = "." + process.argv[3];

// fs.readdir(pathName, function(err, list) {
//     for (i = 0; i < list.length; i++) {
//         if (path.extname(list[i]) === fileExt) {
//             console.log(list[i]);
//         };
//     }
//     });






