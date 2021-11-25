let areaRect = (a,b) => a*b;
console.log(areaRect(8, 5))
document.write('S прямокутника: ' + areaRect(8, 5))


let areaCircle = (r) => r ** 2 * Math.PI;
console.log(areaCircle(7))
document.write(' S кола: ' + areaCircle(7))


let areaCylinder = (r, h) => 2 * Math.PI * r * h;
console.log(areaCylinder(10, 5))
document.write(' S циліндра: ' + areaCircle(10, 5))


let array = ['Программирование — процесс создания компьютерных программ. ', 2021];
const receiveArray = array => {
for (let i = 0; i < array.length; i ++){
   document.write(array[i]);
}
   }
receiveArray(array);


let dataP = (text = 'По выражению одного из основателей языков программирования Никлауса Вирта, «Программы = алгоритмы + структуры данных».') => {
    document.write(`<p> ${text} </p>`)
}
dataP()


const createUl = (text) => {
    document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`)
}
createUl('Программирование основывается на использовании языков программирования, на которых записываются исходные тексты программ');


const createUl2 = (text, size) => {
    document.write(`<ul>`)
    for (let i = 0; i <= size; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)
}
createUl2('Программирование основывается на использовании языков программирования', 3);


let someArray = ['Natalia Pylaeva', 16.12, 'Ivan Rudenko', 1967, true,];
function primitivElements(arr) {
    document.write(`<ol>`);
    for (let i=0; i < arr.length; i++) {
        document.write(`<li> ${arr[i]} </li>`)
    }
    document.write (`</ol>`)
}
primitivElements(someArray);


 let newUser = [{id:1, name: 'Natalia', age: 31},
     {id:2, name: 'Oleksiy', age: 30},
     {id:3, name: 'Matviy', age: 26},
     {id:4, name: 'Violetta', age: 22}];
const objUser = (user) => {
    for (const userElement of user){
        document.write(`<div> ${userElement.id}. ${userElement.name} - ${userElement.age}</div>`)
    }
}
objUser(newUser);

