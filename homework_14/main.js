function cb2(money, message, kredit, timeout) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            money -= kredit;
            resolve(money);
            console.log(`${message} ${money} Timeout:${timeout}`);
            return money;
        }, timeout)
    });
}
// function wakeUp(isWorkingDay = true) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isWorkingDay) {
//                 resolve('Let go again');
//             }
//             reject('Go rest');
//         }, 1000)
//     })
// }
// function goEat(eat){
//     return new Promise(resolve) => {
//         setTimeout() => {
//             resolve(`Have a breakfast ${eat}`);
//         }
//         reject('Go to supermarket')
//     }, 200)
//     });
// }