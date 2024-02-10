var inputUnit = prompt('Введіть одиниці вимірювання (км, кг, год)');
var input = prompt('Введіть число');
var outputUnit;
var output;

switch(inputUnit) {
    case 'км':
        output = input * 1000;
        outputUnit = 'м';
        break;
    case 'кг':
        output = input * 1000;
        outputUnit = 'г';
        break;
    case 'год':
        output = input * 60;
        outputUnit = 'хв';
        break;
    default:
        output = 'невідома одиниця вимірювання';
        outputUnit = '';
}

console.log(input + ' ' + inputUnit + ' це ' + output + ' ' + outputUnit);