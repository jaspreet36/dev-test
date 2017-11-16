var test = require('./test').test;

var maxTime = 1000;

var evenDoubler = function(value, callback) {
    var waitTime = Math.floor(Math.random()*(maxTime+1));
    if(value%2) {
        setTimeout(function() {
            callback(new Error("Odd Input"), value, waitTime);
            //callback("Error");
        }, waitTime);
    } else {
        setTimeout(function() {
            callback(null, value*2, waitTime);
        }, waitTime);
    }
};


var handlerResults = function(err, results, time) {
    if(err) {
        console.log("Error : " + err.message + " " + results + " in " + time + "ms");
    } else {
        console.log("The results are " + results + " in " + time + "ms");
    }
};

evenDoubler(2, handlerResults);
evenDoubler(3, handlerResults);
evenDoubler(4, handlerResults);
evenDoubler(5, handlerResults);



console.log(test(2));