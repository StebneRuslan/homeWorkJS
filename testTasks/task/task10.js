'use strict';

/**
 * cAPS lOCK
 *
 * зАЧЕМ НУЖНА КЛАВИША cAPS lOCK?
 * Caps Lock — клавиша компьютерной клавиатуры, предназначенная для автоматической (постоянной) смены регистра
 * букв со строчных на прописные. Будучи случайно нажатой, она приводит к последствиям вроде первого абзаца в
 * условии этой задачи.
 *
 * Будем считать, что слово набрано с ошибочно нажатой клавишей Caps Lock, если:
 * - либо оно полностью состоит из прописных букв;
 * - либо прописными являются все его буквы, кроме первой.
 *
 * В таком случае, нужно автоматически поменять регистр всех букв на противоположный. Например,
 * регистр букв слов «hELLO», «HTTP», «z» должен быть изменен.
 * Напишите программу, которая применяет описанное выше правило или оставляет слово без изменения, если оно не применимо.
 *
 * Входные данные
 * записано слово, состоящее из прописных или строчных букв латинского алфавита. Длина слова — от 1 до 100 символов включительно.
 *
 * Выходные данные
 * Выведите результат обработки данного слова.
 */

var capsLockTests = [
    {
        parameters: ["cAPS"],
        expectedResult: "Caps"
    },
    {
        parameters: ["Lock"],
        expectedResult: "Lock"
    },
    {
        parameters: ["wHY DO wE NEED cAPS lOCK?"],
        expectedResult: "Why do We need Caps Lock?"
    },
    {
        parameters: ["FuNkY iS nOt CaPs!"],
        expectedResult: "FuNkY Is nOt CaPs!"
    }
];


function capsLock(str) {
    let res = "";
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        let bigLetter;
        let word = words[i];
        if (word[0] >= "a" && word[0] <= "z") {
            bigLetter = true;
            for (let j = 1; j < word.length; j++) {
                if (word[j] >= "a" && word[j] <= "z") {
                    bigLetter = false;
                    break;
                }
            }
            if (bigLetter) {
                let s = word.substring(1);
                word = word[0].toUpperCase() + s.toLowerCase();
            }
        } else {
            bigLetter = true;
            for (let j = 1; j < word.length; j++) {
                if (word[j] >= "a" && word[j] <= "z") {
                    bigLetter = false;
                    break;
                }
            }
            if (bigLetter) {
                word = word.toLowerCase();
            }
        }
        if (res === "") {
            res = word;
        } else {
            res += " " + word;
        }
    }
    return res;
}


tasks.push({
    title: "cAPS lOCK",
    solution: capsLock,
    tests: capsLockTests
});
