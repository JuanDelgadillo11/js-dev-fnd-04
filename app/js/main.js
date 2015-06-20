/**
 * Created by jalatraining on 5/30/2015.
 */
console.log("This is a code from MAIN.JS");

var sayHello= function(name){
    console.log('hello'+name);
}
var age='';
function calculateAge(bornYear){
    var age=2014 - bornYear;
    return age;
};

//var x = [1, 123, 500, 115, 44, 88];
//var calculateAll= function(){
//    console.log('SUM', sum(x));
//    console.log('MIN', min(x));
//    console.log('AVG', avg(x));
//    console.log('MAX', max(x));
//}
//calculateAll(1,2,3);
var sum= function(){
    var i, sum = 0;
    if(i = 0){
        if (i < arguments.length){

            sum += arguments[i];
        }
        i++;
    }
    return sum;

};
var min= function(){
    var pos,minimo=0;
    if(pos=0)
    {
        if(pos> arguments.lenght){
            minimo=arguments[pos];
        }
        poss++;
    }
    return minimo;
};
var avg= function(){

};
var max= function(){
    var pos,max=0;
    if(pos=0)
    {
        if(pos< arguments.lenght){
            max=arguments[pos];

        }
        poss++;
    }
    return max;
};

var pepe ={
    name:"Juan",
    sayHello:function(){console.log("")}
};

var countWords =function(){
    var paragraph = window.prompt('Introduce teh paragraph');
    return paragraph.split('').lenght;
};

var currentDayTime= function(){
    var date= new Date();
    if (date.getUTCDay()==6)
    {console.log("Today is saturday");}
    //console.log("Today is" +date.getUTCDay());
    if(date.getUTCHours()>12)
    {console.log("Current time is:" + date.getUTCHours()+"P.M.:",date.getUTCMinutes()+":",date.getUTCSeconds());}
    else
    {console.log("Current time is:" + date.getUTCHours()+"A.M.:",date.getUTCMinutes()+":",date.getUTCSeconds());}
};

var validateDate= function(){
    var cadena="2015-06-06";
    var aux=cadena.split('-');
    if (aux[0]!= /^[0-9]{4}$/){
        console.log("el año es invalido")
    }
    if (aux[1]!= /^[0-30]{2}$/){
        console.log("el mes es invalido")
    }
    if (aux[2]!= /^[0-7]{2}$/){
        console.log("el dia es invalido")
    }
    if (cadena== /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/){
        console.log('La fecha es valida');}
    var regExp= new RegExp(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/);

};

//Calc "capicua" value
//This function validated if the number is Capicua
var isCapicua= function(num){
    // this code invert the string and display it as a number
    return num == Number(num.toString().split('').reverse().join(''));
    //code found on internet to revert a string
    //return num= Number(string.split('').reverse().join(''));
};

// function that receive the range
var getFirstCapicua = function(rangeInit, rangeEnd){
    var firstCapicua;
    for (var i = rangeInit; i <= rangeEnd; i++) {

        if (isCapicua(i)) {
            firstCapicua=i;
            // console.log('This is a capicua number is: ' + i);

        }
    }
    return firstCapicua;
};
var start=20,end=5000;
var calculateCapicua= function(){
    console.log('This is a capicua number is: ' + getFirstCapicua(start,end));
};
// other way to convert an array to number is use parseInt or as I used Number


/*
 * This is my code
 * */
//// function that receive the range
//var getFirstCapicua = function(rangeInit, rangeEnd){
//
//    for (var i = rangeInit; i <= rangeEnd; i++) {
//
//        if (isCapicua(i)) {
//            return i;
//            // console.log('This is a capicua number is: ' + i);
//
//        }
//    }
//};
//var start=20,end=5000;
//var calculateCapicua= function(){
//    console.log('This is a capicua number is: ' + getFirstCapicua(start,end));
//};
//// other way to convert an array to number is use parseInt or as I used Number

// This is the code for calculate the odd/even numbers

var isOdd= function(num){
    return (num%2)==0;
    //return
};
// function that calculate the odd number
var getFirstOddnumbers=function(n){
    for(var i=1;i<n*2;i++)
    {
        if(isOdd(i))
        {
            console.log(i);
            continue;
        }
        console.log(i);
    }
};
var n=5;
console.log('This is an odd number: ' + getFirstOddnumbers(n));

//my code

var getFact= function(n){
    if(n==0)
        var fact = 1;
    else
        for (var i = 1; i <= n; i++)
        {
            fact = fact * i;
        };
    return fact;
};
console.log('This is the result: ' + getFact(n));

// leo code
var getFact1= function(x){
    var fact = 1;
    if(x==0)
        return fact;
    for (var i = 1; i <= x; i++)
    {
        fact = fact * i;
    };
    return fact;
};
console.log('This is the result: ' + getFact1(n));


////Truncate a long word/paragraph my code
//var truncateString=function(str,pos)
//{
//    var cadAux=[];
//    for(var i=0;str.lenght-1;i++)
//    {
//        cadAux=cadAux.concat(str.charAt(i));
//        if(i==pos){
//            return cadAux;
//        }
//    }
//
//};
//truncateString('Hello word',7); //==>'Hello w'


//Truncate a long word/paragraph Leo code
/**
 *
 * @param str
 * @param pos
 * @returns {Array}
 */
var truncateString=function(str,pos)
{
    var cadAux='';
    var splitString = str.split('');
    for(var i=0;i<pos;i++)
    {
        cadAux+=splitString[i];
    }
    return cadAux;
};
console.log(truncateString('Hello word',7)); //==>'Hello w'

//(function(str,pos)
//{
//    var cadAux='';
//    var splitString = str.split('');
//    for(var i=0;i<pos;i++)
//    {
//        cadAux+=splitString[i];
//    }
//    return cadAux;
//})();
/**
 * This function is anonimous and auto excutable
 */
(function(){
    var now=new Date();
    console.log('hello'+now);
})();


//// example 1
//var doOperation = function(a,b,cb){
//    console.log(a,b,cb());
//};
//var callback=function(){
//    console.log('I am callback');
//};
//doOperation(1,2, callback());


// example 2
var doOperation = function(a,b,cb){
    console.log(a,b,cb());
};

doOperation(1,2, function(){
    console.log('I am callback');
});

// example 3
(function(){
    console.log('I am callback');
})();

var sayHello= function(name){
    console.log('hello'+name)
};
// AF
(function(name){
    console.log('hello'+ name)
})('juan');


// functiones con llamadas a funciones anonimas
var doOperation= function(){
    console.log('this is the doOperation');
    return function(){
        console.log('hello');
    }
};

var x=doOperation();


//funcion anonima y autoejecutable

// functiones con llamadas a funciones anonimas
var doOperation= function(){
    console.log('this is the doOperation');
    return (function(){
        console.log('hello');
    })();
};

var x=doOperation();

// retornando un valor despues de llamar a la funcion autoejecutable
// functiones con llamadas a funciones anonimas
var doOperation= function(){
    console.log('this is the doOperation');
    return (function(){
        console.log('hello');
        return 1;
    })();
};

var x=doOperation();


//como crear una clase comienza con mayuscula clase mas constructor
var Person=function(name,edad){
    this.name=name;
    this.edad=edad;
    this.eat= function(){
        console.log(this.name+'comiendo');
    };
};

var pepe= new Person('pepe',12);
var luis= new Person('Luis',10);

// this another way
//paco ={name:'paco'};
//luis = new Object();
//function(){console.log('eating')};


//var Calculator=function (){
//    var memory=0;
//
//    this.add=function(ope1,ope2){
//        if(!ope2)
//            return memory += ope1;
//        memory += ope1 + ope2;
//        return memory;
//    };
//};
////tarea3
//var calculator = new Calculator();
////calculator.calculateAll(1,2,3,4);
////calculator.calculateAll(1,2);
////calculator.calculateAll();
//
//console.log('1+2='+calculator.add(2,1));//==>3 AND MEMORY =3
//console.log('+2='+calculator.add(2));//==>5  AND MEMORY =5
//calculator.divide(2);//2.5==> AND MEMORY =2.5
//calculator.reset();//MEMORY = 0

var Calculator=function (){
    var memory=0;

    this.getMemory=function(){
        return memory;
    };

    this.setMemory=function(newValue){
        memory=newValue;
        return memory;
    };
};
//definiendo
Calculator.prototype.add=function(ope1, ope2){
    if(!ope2)
        return this.setMemory(this.getMemory()+ ope1);
    this.setMemory(ope1 + ope2);
    return this.getMemory();
};
//console.log('1+2='+Calculator.add(2,1));//==>3 AND MEMORY =3
//console.log('+2='+Calculator.add(2));//==>5  AND MEMORY =5