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