// Задача 1. Написать функции, которые сортируют массив по возрастанию и по убыванию. В функцию массив передается в качестве аргумента. Честно говоря, сама когда-то решала такие задачи, но с помощью sort (этот способ также написала для обоих сортировок. Без sort долго тупила, нашла алгоритм сортировки пузырьком, попробовала в нем разобраться)

//Только тут при проверке одной функции остальные надо закомментить

const arr = [1,7,3,2,34,21,2,4,];
// Сортировка по возрастанию

function sortMax (arr) {
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                let index = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = index;
            }
        }
    }
    return arr;
}

console.log(sortMax(arr));

// Сортировка по убыванию

function sortMin (arr) {
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] < arr[i + 1]) {
                let index = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = index;
            }
        }
    }
    return arr;
}
console.log(sortMin(arr));

//Сортировка по возрастанию с помощью sort
function sortArrayMax (arr) {
    return arr.sort((a, b) => a - b);
}

console.log(sortArrayMax(arr));

//Сортировка по убыванию с помощью sort
function sortArrayMin (arr) {
    return arr.sort((a, b) => b - a);
}

console.log(sortArrayMin(arr));