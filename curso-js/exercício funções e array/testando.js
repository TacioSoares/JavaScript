let val = [4,5,6,7,80,4,44,3,3,2,1,66,88]
var c = 1
for (var c in val) {
    if (val[c] > val[c-1]) {
        console.log(val[c])
    } else {
        console.log(val[c-1])
    }
}