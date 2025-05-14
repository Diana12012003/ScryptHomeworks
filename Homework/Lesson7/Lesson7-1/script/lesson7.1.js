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
    new User('Lola', 124, 'Kaspian', 'sdssd@gmail.com', '+283-343-34534-5'),
    new User('Lola', 125, 'Kaspian', 'sdssd@gmail.com', '+283-343-34534-5'),
    new User('Lola', 126, 'Kaspian', 'sdssd@gmail.com', '+283-343-34534-5'),
    new User('Lola', 127, 'Kaspian', 'sdssd@gmail.com', '+283-343-34534-5'),
    new User('Lola', 128, 'Kaspian', 'sdssd@gmail.com', '+283-343-34534-5'),
    new User('Lola', 129, 'Kaspian', 'sdssd@gmail.com', '+283-343-34534-5'),
    new User('Lola', 130, 'Kaspian', 'sdssd@gmail.com', '+283-343-34534-5'),
    new User('Lola', 131, 'Kaspian', 'sdssd@gmail.com', '+283-343-34534-5'),
    new User('Lola', 132, 'Kaspian', 'sdssd@gmail.com', '+283-343-34534-5')
]
console.log(users);