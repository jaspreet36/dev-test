var maxTime = 1000;

var evenDoubler = function(value, callback = () => {}) {
    return new Promise((resolve, reject) => {
        var waitTime = Math.floor(Math.random()*(maxTime+1));
        if(value%2) {
            setTimeout(function() {
                callback(new Error("Odd Input"), value, waitTime);
                //callback("Error");
            reject(new Error("Odd Input"), value, waitTime);
            }, waitTime);
        } else {
            setTimeout(function() {
                callback(null, value*2, waitTime);
                resolve([value*2, waitTime]);
            }, waitTime);
        }
    });
};


// var handlerResults = function(err, results, time) {
//     if(err) {
//         console.log("Error : " + err.message + " " + results + " in " + time + "ms");
//     } else {
//         console.log("The results are " + results + " in " + time + "ms");
//     }
// };

var handlerResults = function(err, results, time) {
    if(err) {
        console.log("Error : " + err.message + " " + results + " in " + time + "ms");
    } else {
        console.log("The results are " + results + " in " + time + "ms");
    }
};

evenDoubler(2, handlerResults);
// evenDoubler(3, handlerResults);
// evenDoubler(4, handlerResults);
// evenDoubler(5, handlerResults);

evenDoubler(6)
.then(results => {
    console.log("The results are " + results[0] + " in " + results[1] + "ms");
})
.catch(console.error);