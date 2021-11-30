function User(id, name, surname, email, phone) {
    this.id = id
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
console.log(User);


let users = [
    new User (7, 'Natalia', 'Pylaeva', 'n0959482152@icloud.com', '+380959482152'),
    new User (2, 'Oleksiy', 'Pylaev', '0505705251@icloud.com', '+380505705251'),
    new User (3, 'Matviy', 'Pylaev', '0979482152@icloud.com', '+380979482152'),
    new User (4, 'Violetta', 'Pylaeva', '0978482152@icloud.com', '+380978482152'),
    new User (5, 'Ivan', 'Rudenko', '0669482152@icloud.com', '+380669482152'),
    new User (8, 'Svetlana', 'Poyda', '0959485552@icloud.com', '+380959485552'),
    new User (1, 'Anzhela', 'Molchanova', 'n0959487772@icloud.com', '+380959487772'),
    new User (6, 'Konstantin', 'Molchanov', '0959488852@icloud.com', '+380959488852'),
    new User (9, 'Stanislav', 'Molchanov', '095948222@icloud.com', '+38095948222'),
    new User (10, 'Anastasiya', 'Molchanova', '0666482152@icloud.com', '+380666482152')
]
console.log(users);


let filteredUsers = users.filter (value => value.id % 2 === 0);
console.log(filteredUsers);


users.sort((a, b) => a.id - b.id);
console.log(users);


class Client {
 constructor(id, name, surname, email, phone, order) {
     this.id = id;
     this.name = name;
     this.surname = surname;
     this.email = email;
     this.phone = phone;
     this.order = order;
 }
}
console.log(Client);


let clients = [
    new Client (7, 'Natalia', 'Pylaeva', 'n0959482152@icloud.com', '+380959482152', ['tea', 'butter', 'water', 'cucumber', 'potatoes']),
    new Client (3, 'Matviy', 'Pylaev', '0979482152@icloud.com', '+380979482152', ['cacao', 'bread']),
    new Client (4, 'Violetta', 'Pylaeva', '0978482152@icloud.com', '+380978482152', ['chocolate', 'juice', 'yogurt', 'tomato']),
    new Client (5, 'Ivan', 'Rudenko', '0669482152@icloud.com', '+380669482152', ['bear', 'fish', 'chips']),
    new Client (8, 'Svetlana', 'Poyda', '0959485552@icloud.com', '+380959485552', ['chocolate']),
    new Client (1, 'Anzhela', 'Molchanova', 'n0959487772@icloud.com', '+380959487772', ['tea', 'bread']),
    new Client (6, 'Konstantin', 'Molchanov', '0959488852@icloud.com', '+380959488852', ['tea', 'bread', 'sausages']),
    new Client (9, 'Stanislav', 'Molchanov', '095948222@icloud.com', '+38095948222', ['water', 'juice', 'chocolate']),
    new Client (10, 'Anastasiya', 'Molchanova', '0666482152@icloud.com', '+380666482152', ['coffee']),
];
console.log(clients);


let clientsSort = clients.sort((a,b) => a.order.length - b.order.length);
console.log(clientsSort);


