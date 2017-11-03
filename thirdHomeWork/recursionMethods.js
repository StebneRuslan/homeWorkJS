function getFactorialRecursion(number) {
    if (number === 1) {
        return number;
    } else if (number > 1) {
        return number * getFactorial(number - 1)
    }
}

function getFactorial(number) {
    if (number > 1 && !isNaN(number)) {
        let res = 1;
        for (let i = 1; i <= number; i++) {
            res *= i;
        }
        return res;
    } else {
        console.log('Invalid data')
    }
}

function powRecursively(number, pow) {
    if (pow === 1) {
        return number;
    } else if (pow === -1) {
        return 1 / number;
    } else if (pow === 0) {
        return 1;
    } else if (pow > 1) {
        return number * powRecursively(number, pow - 1);
    } else if (pow < 0) {
        return 1 / (number * powRecursively(number, -pow - 1));
    }
}

function pow(number, pow) {
    let res = 1;
    if (pow === 0) {
        return 1;
    } else if (pow > 0) {
        for (let i = 0; i < pow; i++) {
            res *= number;
        }
        return res;
    } else if (pow < 0) {
        for (let i = 0; i < -pow; i++) {
            res *= number;
        }
        return 1 / res;
    }
}

function numbersSumRecursively(number) {
    if (number > 0) {
        let sum = number % 10;
        if (number >= 10) {
            sum += numbersSumRecursively(Math.floor(number / 10));
        }
        return sum;
    } else {
        console.log('Invalid data')
    }
}

function numbersSum(number) {
    if (number > 0){
        let res = 0;
        while (number) {
            res += number % 10;
            number = Math.floor(number / 10)
        }
        return res;
    } else {
        console.log('Invalid data')
    }
}