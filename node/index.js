const express = require("express")
const app = express()
const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

connection.query(`CREATE TABLE IF NOT EXISTS people (id int not null auto_increment, name varchar (255), primary key(id))`)
connection.end

connection.query(`INSERT INTO people (name) values ('elivando')`)
connection.end


app.get('/', async function(req, res){  
  const result = await query("name"); 
  var html = '<h1>Full Cycle</h1>';
  result.forEach(element => {
    html = html + '</br> Name: ' + element.name
  });

  res.end(html)
  
})

function query(attribute) {
  return new Promise((resolve, reject) => {
    let sql = `SELECT ${attribute} FROM people`;
    let query = connection.query(sql, (err, result, field) => {
      if(err) return reject(err);
      resolve(Object.values(JSON.parse(JSON.stringify(result))));
    });
  });
}

app.listen(port, () => {
  console.log('rodando na porta ' + port)
})