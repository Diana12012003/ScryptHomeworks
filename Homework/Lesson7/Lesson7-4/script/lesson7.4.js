function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let clients = [
(new Client(1, 'Anna', 'Ivanova', 'anna@mail.com', '+380123456789',
    ['Laptop', 'Mouse'])),
(new Client(2, 'Dmytro', 'Shevchenko', 'dmytro@mail.com', '+380987654321',
    ['Phone', 'Headphones'])),
(new Client(3, 'Olga', 'Petrenko', 'olga@mail.com', '+380555555555',
    ['Tablet'])),
(new Client(4, 'Andriy', 'Kovalenko', 'andriy@mail.com', '+380666666666',
    ['Monitor', 'Keyboard', 'Mouse'])),
(new Client(5, 'Maria', 'Sokolova', 'maria@mail.com', '+380777777777',
    ['Smartwatch'])),
(new Client(6, 'Viktor', 'Bondarenko', 'viktor@mail.com', '+380888888888',
    ['Gaming PC', 'Chair'])),
(new Client(7, 'Svitlana', 'Melnyk', 'svitlana@mail.com', '+380999999999',
    ['Printer'])),
(new Client(8, 'Yaroslav', 'Tkachenko', 'yaroslav@mail.com', '+380222222222',
    ['Camera', 'Tripod'])),
(new Client(9, 'Natalia', 'Hrytsenko', 'natalia@mail.com', '+380333333333',
    ['Router', 'Cable'])),
(new Client(10, 'Serhii', 'Polishchuk', 'serhii@mail.com', '+380444444444',
    ['Drone'])),
]
console.log(clients);

