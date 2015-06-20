/**
 * Created by jalatraining on 6/6/2015.
 */
var calculateAll1= function(){
    console.log('SUM', sum(arguments, 0));
    console.log('MIN', min(arguments, 0));
    console.log('AVG', avg(arguments, 0));
    console.log('MAX', max(arguments, 0));
}

var sum=function(numbers, pos){
    if(poss== numbers.lenght-1)
        return numbers[pos];
    return numbers[pos]+ sum(numbers, pos+1)
}
calculateAll1(1,2,3)