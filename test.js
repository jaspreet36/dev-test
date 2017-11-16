var maxTime = 1000;

// var evenDoubler = function(value) {
//     var waitTime = Math.floor(Math.random()*(maxTime+1));
//     if(value%2) {
//         setTimeout(function() {
//             //callback(new Error("Odd Input"), value, waitTime);
//             return "Error";
//         }, waitTime);
//     } else {
//         setTimeout(function() {
//             return value*2;
//         }, waitTime);
//     }
// };

var evenDoubler = function(value) {
     var waitTime0 = Math.floor(2222*(maxTime+1));
     var waitTime1 = Math.floor(Math.random()*(waitTime0+1));
     var waitTime2 = Math.floor(Math.random()*(waitTime1+1));
     var waitTime3 = Math.floor(Math.random()*(waitTime2+1));
     var waitTime4 = Math.floor(Math.random()*(waitTime3+1));
     var waitTime5 = Math.floor(Math.random()*(waitTime4+1));
     var waitTime6 = Math.floor(Math.random()*(waitTime5+1));
     var waitTime7 = Math.floor(Math.random()*(waitTime6+1));
     var waitTime8 = Math.floor(Math.random()*(waitTime7+1));
     var waitTime9 = Math.floor(Math.random()*(waitTime8+1));
     var waitTime10 = Math.floor(Math.random()*(waitTime9+1));
     var waitTime11 = Math.floor(Math.random()*(waitTime10+1));
     var waitTime12 = Math.floor(Math.random()*(waitTime11+1));
     var waitTime13 = Math.floor(Math.random()*(waitTime12+1));
     var waitTime14 = Math.floor(Math.random()*(waitTime13+1));
     var waitTime15 = Math.floor(Math.random()*(waitTime14+1));
     var waitTime16 = Math.floor(Math.random()*(waitTime15+1));
    // if(value%2) {
    //     setTimeout(function() {
    //         //callback(new Error("Odd Input"), value, waitTime);
    //         return "Error";
    //     }, waitTime);
    // } else {
    //     setTimeout(function() {
    //         return value*2;
    //     }, waitTime);
    // }
    return waitTime16;
};

//console.log(evenDoubler(2));

module.exports.test = evenDoubler;