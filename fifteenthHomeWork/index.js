//by Denys Pysmennyi

function perform() {
    let res = new Promise((resolve, reject) => {
        let func = arguments[1];
        let params = arguments[0];
        resolve(func(params));
    });
    return res;
}

perform(null, function(value) { // value === null
    var param = 1;
    console.log(param); // 1
    return param;
})
    .then(function(param) { // param === 1
        console.log(++param); // 2
        return param;
    })
    .then(function(param) { // param === 2
        console.log(++param); // 3
        return param;
    })
    .then(function(param) { // param === 3
        console.log(++param); // 4
        return param;
    })
    .then(function(param) { // param === 4
        console.log(++param); // 5
        return param;
    });