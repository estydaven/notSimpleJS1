//Задача 12. В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

function getSeason (month) {
    switch (month) {
        case 1:
        case 2:
        case 12: 
            return 'Пора года - зима';
            break;
        case 3:
        case 4:
        case 5: 
            return 'Пора года - весна';
            break;
        case 6:
        case 7:
        case 8: 
            return 'Пора года - лето';
            break; 
        case 9:
        case 10:
        case 11: 
            return 'Пора года - осень';
            break;
        default: 
            return 'Значение неизвестно';            
    } 
}

console.log(getSeason(12));