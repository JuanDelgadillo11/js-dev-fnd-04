/**
 * Created by jalatraining on 6/20/2015.
 */
//var add= function(values) {
//    debugger;
//    var sum = 0;
//    for (var i = 2; i<values.length - 1; i++) {
//            //if (i < values.length) {
//      sum += parseInt(values[i]);
//            //}
//    }
//    console.log(sum);
//    return sum;
//};
//
////always provide a string of testing
//var numbers= process.argv;
//console.log('The sum is:', add(numbers));
//llamando a un modulo

// 2 y 3

//var fs=require('fs');
//var getFileContent= function(filePath){
//    return fs.readFileSync(filePath).toString().charAt(0);
//
//};

//3
//var countLines= function(filePath){
//    return fs.readFileSync(filePath).toString().split('\n').length;
//
//};

//console.log('The content of the file', process.argv[2],'is:');
//console.log(process.argv[2],'has',countLines(process.argv[2]),'lines');
//console.log(getFileContent(process.argv[2]));



// ejemplo 4
//var fs = require('fs');
//var getFileContent= function(filePath){
//
//    var cb = function(err,content){
//        if(err)
//            console.log('there was an error reading the file', filePath);
//
//    };
//    //return fs.readFile(filePath,cb);
//    fs.readFile(filePath,cb);
//};
//
//console.log('The content of the file is:', process.argv[2],'is:',getFileContent(process.argv[2]));
//console.log(getFileContent(process.argv[2]));
//console.log('I am done');


// ejemplo 5

var fs = require('fs');
var getFileContent= function(filePath){

    var cb = function(err,content){
        if(err)
            console.log('there was an error reading the file', filePath);
        console.log('The content of the file is:', process.argv[2]);
        console.log(content.toString());
        console.log('I am done');
    };
    //return fs.readFile(filePath,cb);
    fs.readFile(filePath,cb);
};

//console.log('The content of the file is:', process.argv[2],'is:',getFileContent(process.argv[2]));
//console.log(getFileContent(process.argv[2]));
//console.log('I am done');
getFileContent(process.argv[2]);
console.log('Next line');
