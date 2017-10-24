function waterAmount(arr) {

    let secondMax = 0;
    let res = 0;

    while (arr.length > 0) {
        let firstMax = arr[0];
        let i = 0;
        i += 1;
        let waterArray = [];
        waterArray.push(firstMax);
        if (firstMax <= arr[i]) {
            firstMax = arr[i];
            waterArray.shift();
            arr.shift();
            waterArray.push(firstMax);
        } else {
            for (let j = i; j < arr.length; j++) {
                if (arr[j] >= firstMax) {
                    secondMax = arr[j];
                    waterArray.push(secondMax);
                    break;
                }
                if (firstMax === Math.max.apply(null, arr)) {
                    arr.reverse();
                    i = 0;
                    break;
                }
                waterArray.push(arr[j]);
                i += 1;
            }
            arr.splice(0, i);
        }
        res += countWater(waterArray);
    }
    return res;
}

function countWater(arr) {
    let start = arr[0];
    let res = 0;
    if (arr[0] < arr[arr.length - 1]) {
        start = arr[0];
    } else {
        arr.reverse();
        start = arr[0];
    }
    for (let i = 1; i < arr.length - 1; i++) {
        res += start - arr[i];
    }
    return res;
}