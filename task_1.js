function drawTriangle(height, symbol) {
    for (var i = 1; i <= height; i++) {
        var line=''
        for (var k=0; k<i; k++){
            line=line+symbol
        }
        console.log(line);
    }
}
drawTriangle(5, '*');

function drawTriangle(height, symbol) {
    var i = 1;
    while (i <= height) {
        var line=''
        var k=0
        while (k<i){
            line=line+symbol
            k++
        }
        console.log(line);
        i++;
    }
}

drawTriangle(5, '*');

function stupin(x, y) {
    var result = 1;
    for (let i = 0; i < y; i++) {
        result = result*x;
    }
    return result;
}

stupin(2,3)