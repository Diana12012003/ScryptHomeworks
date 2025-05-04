const users = [
    {
        id: 1,
        name: "Jenna ortega",
        username: "Jennie",
        email: "Jen@gmail.com",
        phone: "312-32-82738",
        address: {
            city: "Mexico",
            street: "Mereng St.",
            suite: "Apt. 20",
            zipcode: "323-432"
        }
    },
    {
        id: 2,
        name: "Jared Letto",
        username: "Jarvy",
        email: "GYGY@gmail.com",
        phone: "2323-32432-324324",
        address: {
            city: "Marlpool",
            street: "Main st.",
            suite: "Room 234",
            zipcode: "32-323"
        }
    },
    {
        id: 3,
        name: "Ketty Perry",
        username: "KKKPer",
        email: "kkk@gmail.com",
        phone: "22-2333-344",
        address: {
            city: "Orlando",
            street: "Plain Adams",
            suite: "Suite 233",
            zipcode: "123-344"
        }
    },
    {
        id: 4,
        name: "Orlando Bloom",
        username: "Bloom",
        email: "orlb@gmail.com",
        phone: "123-3234-232",
        address: {
            city: "Orlando",
            street: "Plain Adams",
            suite: "Suite 233",
            zipcode: "123-344"
        }
    },
    {
        id: 5,
        name: "Glen Powell",
        username: "Glem@gmail.com",
        email: "Powell@gmail.com",
        phone: "344-3435-5657",
        address: {
            city: "New York",
            street: "Baker st",
            suite: "Apart. 78",
            zipcode: "899-343"
        }
    },
    {
        id: 6,
        name: "Susan Collins",
        username: "Susy",
        email: "Susan@gmail.com",
        phone: "213-324-354",
        address: {
            city: "Chicago",
            street: "Summer st.",
            suite: "Suite 54",
            zipcode: "2123-233"
        }
    },
];

document.write('<div class="users-box">');

for (let user of users) {
    document.write(`
    <div class="user-block">
      <h2>${user.id} - ${user.name} - ${user.username}</h2>
      <h3>${user.email} - ${user.phone}</h3>
      <div class="address-block">
        <p>City – ${user.address.city}</p>
        <p>Street – ${user.address.street}</p>
        <p>Suite – ${user.address.suite}</p>
        <p>Zip code – ${user.address.zipcode}</p>
      </div>
    </div>
  `);
}