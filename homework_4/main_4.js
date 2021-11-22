function areaRect(a,b) {
return a*b;
}
console.log(areaRect(8, 5))
document.write('S прямокутника: ' + areaRect(8, 5))


function areaCircle(r) {
    return Math.PI * Math.pow(r,2);
}
console.log(areaCircle(7))
document.write(' S кола: ' + areaCircle(7))


function areaCylinder(h,r) {
    return 2 * Math.PI * r * h;
}
console.log(areaCylinder(10, 5))
document.write(' S циліндра: ' + areaCircle(10, 5))


function receiveArray(arr) {
    for (const item of arr){
        console.log();
    }
    }
    function createP(text) {
        document.write(`<p> ${text} </p>`)
    }
    createP('Программирование — процесс создания компьютерных программ.');


function createUli(text, size) {
    document.write(`<ul>`);
    for (let i=0; i< size; i++) {
        document.write (`<li> ${text} </li>`);
}
    document.write (`</ul>`);
}
createUli('По выражению одного из основателей языков программирования Никлауса Вирта, «Программы = алгоритмы + структуры данных».', 2);


function createUli2(text, size) {
    document.write(`<ul>`);
    for (let i=0; i< size; i++) {
        document.write (`<li> ${text} </li>`);
    }
    document.write (`</ul>`);
}
createUli2('Программирование основывается на использовании языков программирования, на которых записываются исходные тексты программ', 3);


let anyArray = ['Natalia Pylaeva', 2022, 'Ivan Rudenko', true,];
function receiveArray2(arr) {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li> ${item} </li>`)
    }
    document.write (`</ul>`);
}
receiveArray2(anyArray);


let newArray = [{id: 1, name: 'Ivan', age: 54}, {id: 2, name: 'Natalia', age: 31}, {id: 3, name: 'Alexey', age: 30}];
function receiveArrayObjects(arr) {
    for (const users of arr){
        document.write(`<div> ${users.id} - ${users.name} - ${users.age}</div>`)
    }
}
receiveArrayObjects(newArray);
