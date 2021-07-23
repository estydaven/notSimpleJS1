//Задача 3. Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.

function isPalindrome (str) {
    let stringStart = str.toLowerCase();
    let string = str.toLowerCase().split('');
    let strArray = [];

    while(string.length) {
        let num = string.pop();
        strArray.push(num);
    }
        
    let finalstring = strArray.join('');

    if (stringStart == finalstring) {
        return 'Эта строка - палиндром';
    } else {
        return 'А эта строка - не палиндром';
    }

}

console.log(isPalindrome('saippuakivikauppias'));