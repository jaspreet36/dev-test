var doubleMyPackage = function(salary, callback) {
    var time = 5000;
    if (salary % 2) {
        setTimeout(function() {
            callback(null, salary, time);
        }, time);

    } else {
        return salary * 2;
    }
};

//console.log(doubleMyPackage(5, abDekhSaale));

doubleMyPackage(5, function(err, result, time) {
    if (err) {
        console.log('waat lag gayi');
    } else {
        console.log(result + ' ched chad');
        console.log('sab theek hai ' + result + ' samay ' + time);
    }
});

console.log(5 * 5);