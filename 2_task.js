//Задача 2. Написать функции, которые находят минимальный и максимальные элемент массива. В функцию массив передается в качестве аргумента. 
//Тут тоже лишние функции надо комментить

const arr = [1,7,3,2,34,21,2,4,];

// Поиск максимального элемента массива

// Поиск максимального элемента массива (длинный способ).
// function getValueMax (arr) {
//     let maxValue = arr[0];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > maxValue) {
//             maxValue = arr[i];
//         }
//     }

//     return maxValue;
// }

// console.log(getValueMax(arr));

// Поиск минимального элемента массива (длинный способ).
// function getValueMin (arr) {
//     let minValue = arr[0];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < minValue) {
//             minValue = arr[i];
//         }
//     }

//     return minValue;
// }

// console.log(getValueMin(arr));

// Поиск максимального элемента массива (короткий способ)
// function getMaxValue (arr) {
//     return Math.max.apply(null, arr);
// }
// console.log(getMaxValue(arr));

// Поиск минимального элемента массива

// Поиск максимального элемента массива (короткий способ)
// function getMinValue (arr) {
//     return Math.min.apply(null, arr);
// }
// console.log(getMinValue(arr));