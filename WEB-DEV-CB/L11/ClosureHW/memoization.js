function memoizedFibonacci() {
    let arr = {}; 

    return function fibonacci(n) {
        if (n <= 1) return n; 
        if (arr[n]) {
            console.log("Get fib(",n,") from closure =>", arr[n]);
            return arr[n]; 
        }
        console.log("Call fib(", n, ")");
        arr[n] = fibonacci(n - 1) + fibonacci(n - 2); 
        return arr[n];
    };
}

let fib = memoizedFibonacci();

console.log(fib(10)); 
console.log(fib(7));  
console.log(fib(15)); 
console.log(fib(10)); 
