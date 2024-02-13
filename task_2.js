
function stupin(x, y) {
    var result = 1;
    for (let i = 0; i < y; i++) {
        result = result*x;
    }
    return result;
}

stupin(2,3)