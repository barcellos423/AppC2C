import mysql  from "mysql2";

/*
const connection = mysql.createConnection({
  host: `${process.env.MYSQL_HOST}`,
  user: `${process.env.MYSQL_USER}`,
  password: `${process.env.MYSQL_PASSWORD}`,
  database: `${process.env.MYSQL_DB}`
});
*/

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "portal#423",
  database: "gbonmaster"
});   

connection.connect(function(err) {
  if (err) {               
      console.log(err.message);             
  }                    
});

export default connection;