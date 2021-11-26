let lengthStr = 'hello world';
console.log(lengthStr.length);
let lengthArr = 'lorem ipsum';
console.log(lengthArr.length);
let lengthString = 'javascript is cool';
console.log(lengthString.length);


let toUpperCase = lengthStr.toUpperCase ();
console.log(toUpperCase)
let toUpperCase1 = lengthArr.toUpperCase();
console.log(toUpperCase1)
let toUpperCase2 = lengthString.toUpperCase();
console.log(toUpperCase2)


let toLowerCase = toUpperCase.toLowerCase();
console.log(toLowerCase)
let toLowerCase1 = toUpperCase1.toLowerCase();
console.log(toLowerCase1)
let toLowerCase2 = toUpperCase2.toLowerCase();
console.log(toLowerCase2)


let str = ' dirty string   '
console.log (str.trim());


let strArray = 'Каждый охотник желает знать';
function stringToArray(strArray) {
    return strArray.split (' ');
}
console.log(stringToArray(strArray));


function delete_characters(strArray, length){
    return strArray.substring(0,length);
}
document.write(delete_characters(strArray,7));


let srtNew = "HTML JavaScript PHP";
function insert_dash(strNew) {
return strNew.replaceAll(' ', '-').toUpperCase()
}
console.log(insert_dash(srtNew));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let srtingNew = 'java'
function someArr(stringNew){
    return stringNew[0].toUpperCase() + stringNew.slice(1);
}
console.log(someArr(srtingNew));


let strArr = 'how are you?'
function capitalize(strArr) {
    return strArr.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
}
console.log(capitalize(strArr));

