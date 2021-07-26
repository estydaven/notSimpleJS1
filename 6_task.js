//Задача 6. Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке. Гласными являются «a», «e», «i», «o», «u».

function getSumVowels (str) {  
    let string = str.toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let sum = 0; 
    for (let item of string) {
        if (vowels.includes(item)) {
            sum++;
        }
    }

    return sum;
}

console.log(getSumVowels(str));