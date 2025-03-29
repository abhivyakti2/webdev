function print() {
    console.log("Name", this.name)
    console.log("age", this.age)
    console.log("address", this.address)
    console.log("company", this.company)
}

//without this, will have to send all arguments for every other object

let person = {
    name: 'kartik',
    age: 10,
    address: 'ajdasbdasbfbas basdbas',
    company: 'CB'
}


let person1 = {
    name: 'asdfasdasda',
    age: 10,
    address: 'ajdasbdasbfbas basdbas',
    company: 'CB'
}

print.call(person1);