const mysql = require('mysql2/promise');
const config = require('../my_leson/config_to_my_leson_11');

async function main() {
    const conn = await mysql.createConnection(config);
    console.log('connect to database')
    const [rows, fields] = await conn.execute('SELECT name FROM city LIMIT 10');
    console.log(rows);
    conn.end()
}
main();
