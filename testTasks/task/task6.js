'use strict';

/**
 * Красивый год
 *
 * А знали ли Вы забавный факт о том, что 2013 год является первым годом после далекого 1987 года,
 * в котором все цифры различны?
 *
 * Теперь же Вам предлагается решить следующую задачу: задан номер года, найдите наименьший номер года,
 * который строго больше заданного и в котором все цифры различны.
 *
 * Входные данные
 * В единственной строке задано целое число y (1000 ≤ y ≤ 9000) — номер года.
 *
 * Выходные данные
 * Выведите единственное целое число — минимальный номер года, который строго больше y, в котором все цифры различны.
 * Гарантируется, что ответ существует.
 */

var prettyYearTests = [
    {
        parameters: ["1987"],
        expectedResult: 2013
    },
    {
        parameters: ["2013"],
        expectedResult: 2014
    },
    {
        parameters: ["8796"],
        expectedResult: 8901
    }
];


function prettyYear(y) {
    let res = 0;
    while (res !== true) {
        y++;
        res = checkYear(y);
    }
    return y;
}

function checkYear(year) {
    let strNum = year.toString();
    for (let i = 0; i < strNum.length; i++) {
        for (let j = i + 1; j < strNum.length; j++) {
            if (strNum[i] === strNum[j]) {
                return false;
            }
        }
    }
    return true;
}


tasks.push({
    title: "Красивый год",
    solution: prettyYear,
    tests: prettyYearTests
});
