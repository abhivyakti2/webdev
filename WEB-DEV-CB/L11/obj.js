let person={
    name: 'Abhi',
    age: 20,
    college:'IGDTUW',
    ' ':'Hello world!',
    " ":'Space only',
    'last name':'Pal'
}
console.log("Name:",person.name)
console.log("Age:",person.age)
console.log("College:",person.college)


console.log("Name:",person["name"])
console.log("Age:",person["age"])
console.log("College:",person["college"])
console.log("' ':",person[' '])
console.log("space:",person[" "])
// string key if key has space
console.log("Last Name:",person["last name"]) 
 console.log("------------------------------------------------")
for(let k in person){
    console.log(k,":",person[k])
}
person['country'] ='India'
console.log(person.country)
delete person.country