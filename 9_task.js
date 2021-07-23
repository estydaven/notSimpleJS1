//Задача 9. Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.

const array = ['python', 'javascript', 'programming', 'hello', 'world'];
const text = 'hello';

function inArray (text, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === text) {
            return true;
        }
    }
    return false;
}

console.log(inArray(text, array));