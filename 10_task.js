//Задача 10. Дана строка, например, '123456'. Сделайте из нее '214365'.

function getReverseString (str) {
    let string = str.split('');
    for (let i = 0; i < string.length; i+=2) {
        let num = string[i];
        string[i] = string[i + 1];
        string[i + 1] = num;
    }

    return string.join('');
}

console.log(getReverseString('123456'));