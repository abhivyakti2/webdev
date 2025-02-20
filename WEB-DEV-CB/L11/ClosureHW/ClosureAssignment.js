function createCounter() {
    var count = 0; 

    let counter = { 
        increment: function () {
            count++; 
            console.log(count);
        },
        decrement: function () {
            count--; 
            console.log(count);
        },
        getCount: function () {
            console.log(count); 
        }
    };

    return counter; 
}

let counter = createCounter();

counter.increment(); 
counter.increment(); 
counter.decrement(); 
counter.getCount();  
