//Задача 11. В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

function getDecade (day) {
    if (day >= 1 && day <= 10) {
        return 'Это первая декада';
    }
    if (day >= 11 && day <= 20) {
        return 'Это вторая декада';
    }
    if (day >= 21 && day <= 31) {
        return 'Это третья декада';
    }
    else {
        return 'В месяце нет столько дней! И нуля тоже=)';
    }
} 

console.log(getDecade(11));