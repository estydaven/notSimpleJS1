//Задача 7. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

const arr = [1,2,3,4,5,6,];

function reverseArray (arr) {
    let outputArray = [];

    while(arr.length) {
        let num = arr.pop();
        outputArray.push(num);
    }

    return outputArray;
}

console.log(reverseArray(arr));