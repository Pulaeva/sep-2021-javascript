const div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta')
div.style.backgroundColor = 'purple'
div.style.color = 'yellow'
div.style.fontSize = '40px'
div.innerText = 'What a wonderful day!'
document.body.appendChild(div)

const div2 = div.cloneNode(true)
document.body.appendChild(div2)



const arr = ['Main', 'Products', 'About us', 'Contacts'];
const menuDiv = document.getElementsByClassName('menu')[0];
arr.forEach(item =>{
    const li = document.createElement('li');
    li.innerText = item
    menuDiv.appendChild(li)
})
document.body.appendChild(document.createElement('hr'))



const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
   ];
coursesAndDurationArray.forEach(value => {
    const div = document.createElement('div');
    let text = ''
    for (let key in value) {
        text+=`--${key}: ${value[key]}`
    }
    div.innerText = text.slice(2)
    document.body.appendChild(div)
    document.body.appendChild(document.createElement('hr'))
})



coursesAndDurationArray.forEach(value => {
    const div = document.createElement('div');
    div.classList.add('item')
    const h1 = document.createElement('h1');
    h1.classList.add('heading')
    const p = document.createElement('p');
    p.classList.add('description')
    h1.innerText = value.title
    p.innerText = value.monthDuration
    div.append(h1,p)
    document.body.appendChild(div)
})
