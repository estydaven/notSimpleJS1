//Задача 5. Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.

function isAnagram (original, test) {
    let strOne = original.toLowerCase().split('').sort().join('');
    let strTwo = test.toLowerCase().split('').sort().join('');

    if (strTwo == strOne) {
        return 'Эти строки являются анаграммами';
    } else {
        return 'А эти строки не являются анаграммами';
    }
}

console.log(isAnagram('пила лип', 'липа пила'));