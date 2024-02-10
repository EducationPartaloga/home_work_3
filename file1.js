var input = prompt ('enter year');
var year = +input
if(typeof year==='number' && year>0){
    var lastDigit = year%10
    var word = ''
    if (year > 10 && year <= 20) {
        word = 'років'
    } else if (lastDigit===1){
        word = 'рік'
    } else if (lastDigit>=2 && lastDigit<5) {
        word = 'роки'
    } else if (lastDigit >= 5) {
        word = 'років'
    }
}
console.log(year+' '+word)