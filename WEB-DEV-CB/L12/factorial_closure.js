function memoizedFac() {
    let memo = {};
    return function fact(n) {
        if (n <= 1) return 1;
        if (memo[n]) return memo[n]; 
        return memo[n] = n * fact(n - 1); 
    };
};

let myFac=memoizedFac();
console.log(myFac(5))
console.log(myFac(7))

