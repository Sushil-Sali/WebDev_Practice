const { faker, tr } = require("@faker-js/faker");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "delta_con",
});

let RandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};
// let q='INSERT INTO user(id,username,email,password) VALUES (? ,?, ?, ?) ';

// let user=[101,'Sushil','sushil@gmail.com','1234'];

let users=[];

for (let i=1;i<=100;i++){

    users.push(RandomUser());
}
let q = "INSERT INTO user(id,username,email,password) VALUES ? ";

// let users = [
//   [1022, "Yogesha", "yoges2h@gmail.com", "12324g"],
//   [103, "rahul", "rahul@gmail.com", "1234j"],
// ];

try {
  connection.query(q, [users], (err, result) => {
    if (err) throw err;
    console.log(result);
    // console.log(result.length);
    // console.log(result[0]);
  });
} catch (err) {
  console.log("sorry", err);
}



// console.log(createRandomUser())

connection.end();
