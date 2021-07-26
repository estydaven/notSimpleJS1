//Задача 8. Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество)

const arr = [1,2,3,4,5,6,7,8,9,10,];

function getAvgArray (arr) {

    if (arr.length === 0) {
        return 'Массив пуст, посчитать среднее арифметическое невозможно'
    }

    let sumArr = 0;

    for (let i = 0; i < arr.length; i++) {
        sumArr += arr[i];
    }

    return sumArr / arr.length;
}

console.log(getAvgArray(arr));