

function findPrimes (a, b) {
    let result = [];

    function checkNumber(x) {
        for (let i = 2; i <= Math.sqrt(x); i += 1) {
            if (x % i === 0 ) {
                return true;
            } 
        } 
            return false;
    }

    for (let y = a; y <= b; y += 1) {
        if (!(checkNumber(y))) {
            result.push(y);
        }
    }
    console.log(result);
}


findPrimes(200, 500);