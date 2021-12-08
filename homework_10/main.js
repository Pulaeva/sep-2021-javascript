// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
    let click = document.getElementById('text');
    let button =document.getElementById('button');
    button.onclick = function () {
    click.style.display = 'none'
    }

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
    document.getElementById('hidebutton').onclick = function () {
    document.getElementById('hidebutton').hidden = true;
    }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
document.getElementById('agebutton').onclick = function () {
   let age = document.getElementById('age').value;
   if (age < 18) {
       alert('Sorry!You are not old enough');
   } else if (!age) {
       alert('Enter your age');
   } else {
       alert('Congratulations!');
   }
}

// - Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.getElementsByClassName('menu')[0];
    menu.onclick = function (){
console.log(this);
this.classList.toggle('collapse');
};

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
let comments = [
    {title: 'lorem1', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem2', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem3', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem4', body: 'lorem ipsum dolo sit ameti'},
]

//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
for (const comment of comments){
    let commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    let title = document.createElement('h2');
    title.innerText = comment.title;
    let bodyComment = document.createElement('div');
    bodyComment.classList.add('body-comment');
    bodyComment.innerText = comment.body
    let btn = document.createElement('button');
    btn.innerText = 'hide comment body';
    btn.onclick = function () {
    bodyComment.classList.toggle('hide-body');
    }
commentDiv.append(title, bodyComment, btn);
    document.body.appendChild(commentDiv);
}
