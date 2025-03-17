function hello() {

    console.log("Hello");

    return hello;
}

hello()(); // hello() function return karega, and we can call it again

// Another way of doing this
let f = hello();
f();