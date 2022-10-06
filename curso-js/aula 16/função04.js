let f = function (n) {
            let fat = 1
            for (c=n;c>1;c--) {
                fat *= c
            }
            return fat
        }

console.log(f(5))