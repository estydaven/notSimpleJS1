//Задача 6. Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке. Гласными являются «a», «e», «i», «o», «u».

let str = 'Mama myla ramu';
let vowels = ['a', 'e', 'i', 'o', 'u'];
let sum = 0;

function getSumVowels (str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] == vowels[j]) {
                sum++;
            }
        }
    }

    return sum;
}

console.log(getSumVowels(str));