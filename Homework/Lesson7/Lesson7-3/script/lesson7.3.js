function User(name, id, surname, email, phone) {
    this.name = name;
    this.id = id;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let user = new User('Lola', 123, 'Kaspian', 'sdssd@gmail.com', '+283-343-34534-5');
console.log(user);
let users = [
    new User('Lola', 123, 'Kaspian', 'sdssd@gmail.com', '+283-343-34534-5'),
    new User('Lola', 126, 'Kaspian', 'sdssd@gmail.com', '+283-343-34534-5'),
    new User('Lola', 137, 'Kaspian', 'sdssd@gmail.com', '+283-343-34534-5'),
    new User('Lola', 142, 'Kaspian', 'sdssd@gmail.com', '+283-343-34534-5'),
    new User('Lola', 105, 'Kaspian', 'sdssd@gmail.com', '+283-343-34534-5'),
    new User('Lola', 95, 'Kaspian', 'sdssd@gmail.com', '+283-343-34534-5'),
    new User('Lola', 45, 'Kaspian', 'sdssd@gmail.com', '+283-343-34534-5'),
    new User('Lola', 565, 'Kaspian', 'sdssd@gmail.com', '+283-343-34534-5'),
    new User('Lola', 656, 'Kaspian', 'sdssd@gmail.com', '+283-343-34534-5'),
    new User('Lola', 33, 'Kaspian', 'sdssd@gmail.com', '+283-343-34534-5')
]
console.log(users);
let sortedUsers = users.sort((a, b) => a.id - b.id);
console.log(sortedUsers);
