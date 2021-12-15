// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

let postsDiv = document.getElementsByClassName('posts') [0];
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => {
        return value.json();
    })
    .then(posts => {
        let postDiv = document.createElement('div');
        postDiv.classList.add('post');
        for (const post of posts) {
            let postDiv = document.createElement('div');
            postDiv.classList.add('post');
            postDiv.innerHTML = `<h4>User ID: ${post.id}</h4>
            <div>Title: ${post.title}</div> 
            <div>Body: ${post.body}</div>`;
            postsDiv.appendChild(postDiv);
            document.body.appendChild(postDiv);
        }
    });
// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(comments => {
        let commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        for (const comment of comments) {
            let divCard = document.createElement('div');
            divCard.classList.add('comment');
            divCard.innerHTML =  `<hr>ID: ${comment.id}</hr>
                                    <div>Name: ${comment.name}</div>
                                    <div>Email: ${comment.email}</div>
                                    <div>Body: ${comment.body}</div>`;

            commentDiv.appendChild(divCard);
            document.body.appendChild(commentDiv);
        }
    })

