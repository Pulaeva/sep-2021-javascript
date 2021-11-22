function numMin(a, b, c) {
    if (a < b && a < c) {
        document.write(a);
        console.log(a);
    } else if (b < c && b < a) {
        console.log(b);
        document.write(b);
    } else {
        console.log(c);
        document.write(c);
    }
};
numMin(200, 100, 50);


function numMax(a, b, c) {
    if (a > b && a > c) {
        document.write(a);
        console.log(a);
    } else if (b > c && b > a) {
        console.log(b);
        document.write(b);
    } else {
        console.log(c);
        document.write(c);
    }
};
numMax(20000, 1000, 5000);


let maxArray = [100,6, 7, 13, 7000,-500]
function arrayMax(numbers) {
    let max = numbers[0];
    for (const element of numbers) {
        if(element > max){
            max = element;
        }
    }
    return max;
}
document.write(`<div>${arrayMax(maxArray)}</div>`)


let minArray = [100,6, 7, 13, 7000,-500]
function arrayMin(numbers) {
    let min = numbers[0];
    for (const element of numbers) {
        if(element < min){
            min = element;
        }
    }
    return min;
}
document.write(`<div>${arrayMin(minArray)}</div>`)



let sumArray = [2, 3, 8];
function sumElement (numbers){
    let num = 0;
    for (const arrayElement of numbers) {
        num = arrayElement + num;
    }
    return num;
}
document.write(sumElement(sumArray))


let middleArray = [2,4,6];
function middle(nums) {
    let result = 0;
    for (const number of middleArray) {
        result = number + result;
    }
    return result/nums.length
}
console.log(middle(middleArray))


function minMax(arg) {
    let min = arguments[0];
    let max = arguments[0];
    for (const element of arguments) {
        if (element > max) {
            max = element;
        }
        if (element < min) {
            min = element;
        }
    }
    console.log('Max number is ', max);
    return min;
}
document.write('Min number is ' + minMax(16, 32, 13, 1989));


function randomizer (length) {
    let array = [];
    for (let i = 0; i < length; i++){
        array.push(Math.round(Math.random()* 100));
    }
    return array
};
document.write(randomizer(16));


function randomizerLimit(length,limit) {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.round(Math.random() * limit));
    }
    return array;
}
document.write(randomizerLimit(20,80));


function reverse(arr) {

    for (let i=0, ri = arr.length-1; i < arr.length; i ++, ri --){
        console.log(i, ri);
    }
}
console.log(reverse([1, 2, 3]));
