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