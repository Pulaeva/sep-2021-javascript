let myNumbers = [1, 2, 3, 4, 5];
console.log(myNumbers);
console.log(myNumbers[0]);
console.log(myNumbers[1]);
console.log(myNumbers[2]);
console.log(myNumbers[3]);
console.log(myNumbers[4]);
let myStrings = ['один', 'два', 'три', 'чотири', 'five'];
console.log(myStrings);
console.log(myStrings[0]);
console.log(myStrings[1]);
console.log(myStrings[2]);
console.log(myStrings[3]);
console.log(myStrings[4]);
let myVariable = ['five', 5, true, false];
console.log(myVariable);
console.log(myVariable[0]);
console.log(myVariable[1]);
console.log(myVariable[2]);
console.log(myVariable[3]);

let array = [];
array[0] = 'Привіт!';
array[1] = 'Мене';
array[2] = 'звати';
array[3] = 'Наталія';
console.log(array);


for (let i = 0; i < 10; i++) {
    document.write(`<div>`);
    document.write('Я вивчаю JavaScript');
    document.write(`</div>`);
}


for (let i = 0; i < 10; i++) {
    document.write(`<div>`);
    document.write('Я вивчаю JavaScript with index ' +i);
    document.write(`</div>`);
}
let i = 0;
while(i < 20){
    document.write('<h1>Я вивчаю JavaScript</h1>');
    i++;
}

let e = 0;
while(e < 20){
    document.write(`<h1>Я вивчаю JavaScript ${e + 1}</h1>`);
    e++;
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    console.log(num);

let str = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
for (let i = 0; i < str.length; i++) {
    const st = str[i];
    console.log(st);
}

let all = [16, 12, 'sixteen', 'twelve', true, false];
for (let i = 0; i <all.length; i++) {
    const al = all[i];
    console.log(al);
    }


let Mymix = [6, 7, 8, 'dream', true, false, '1989'];
for (let i = 0; i < Mymix.length; i++) {
    const mixItem = Mymix[i];
    if (typeof mixItem === 'boolean'){
        console.log(mixItem)
    }
}
let mixMy = [6, 7, 8, 'dream', true, false, '1989'];
for (let i = 0; i < mixMy.length; i++) {
    const mixItem = mixMy[i];
    if (typeof mixItem === 'number'){
        console.log(mixItem)
    }
}

let mix = [6, 7, 8, 'dream', true, false, '1989'];
for (let i = 0; i < mix.length; i++) {
    const mixItem = mix[i];
    if (typeof mixItem === 'string'){
        console.log(mixItem)
    }
}

let emtyArray = [];
emtyArray[0] = 'Привіт!';
emtyArray[1] = 'Okten';
emtyArray[2] = 2021;
emtyArray[3] = 17;
emtyArray[4] = 'November';
emtyArray[5] = 11;
emtyArray[6] = 'Will be soon';
emtyArray[7] = 'December';
emtyArray[8] = true;
emtyArray[9] = false;
for (let i=0; i< emtyArray.length; i++){
    console.log(emtyArray[i]);
}

for (let i=0; i < 10; i++){
    console.log(i);
    document.write(i + ' ');
}

for (let i=0; i < 100; i++) {
    console.log(i);
    document.write(i + ' ');
}

for (let i = 0; i < 100; i+=2) {
    console.log(i + ' ');
    document.write(i + ' ');
}

for (let i = 0; i < 100; i++) {
if (i%2 === 0){
    console.log(i);
    document.write(i + ' ');
}
}
for (let i = 0; i < 100; i++){
    if (i % 2 === 1) {
        console.log(i);
        document.write(i + ' ');
    }
}
}

