const mysql = require('mysql2/promise');
const config = require('../leson_11/config');

//Task 1.
// Для работы с базой данных используется mysql2.Все действия в задачах производим над таблицей user
// (таблицу создайте на основе файла node_unit_11.sql).Настройки подключения к базе данных должны быть вынесены в отдельный
// файл config_to_my_leson_11.js и require в данный файл.

// Напишите функцию f1(все функции в задании async), которая возвращает age пользователя с email = iv@ua 

async function f1() {
    const conn = await mysql.createConnection(config)
    console.log('connect to database')
    const [rows, fields] = await conn.execute('SELECT age FROM user where email="iv@ua"');
    console.log('disconnect db');
    console.log(rows);
    conn.end();
};

//f1();
// f1() - для проверки расскоментируйте, потом верните комментарий на место.

// Task 2
// Создайте функцию f2, которая возвращает coin (число) пользователя с возрастом 46.

async function f2() {
    const conn = await mysql.createConnection(config)
    console.log('connect to database')
    const [rows, fields] = await conn.execute('SELECT firstname FROM user where coin="46"');
    console.log('disconnect db');
    console.log(rows);
    conn.end();
};
//f2()
// f2() - для проверки расскоментируйте, потом верните комментарий на место.


// Task 3
// Создайте функцию f3, которая возвращает true если у пользователя с lastname Petr монет больше 15 или false если меньше или равно.

async function f3() {
    const conn = await mysql.createConnection(config)
    console.log('connect to database')
    const [rows, fields] = await conn.execute('SELECT coin FROM user where lastname="Petr"');
    console.log('disconnect db');
    console.log(rows);
    conn.end();
    if (rows>15){
        return true
    }else{
        return false
    }
}

// f3() - для проверки расскоментируйте, потом верните комментарий на место.


// Task 4
// Создайте функцию f4, которая возвращает массив [ ] где нулевой элемент это количество монет у пользователя с емейл = iv@ua, а первый элемент - емейл пользователя с firstname berg. Задачу решать двумя последовательными запросами.

async function f4() {
    const conn = await mysql.createConnection(config)
    let ar=[]; // dont now way?????
    console.log('connect to database')
    let ar[0] = await conn.execute('SELECT coin FROM user where email="iv@ua"');
    let ar[1] = await conn.execute('SELECT email FROM user where firstname="berg"');
    console.log('disconnect db');
    console.log(ar);
    conn.end();
}

// f4() - для проверки расскоментируйте, потом верните комментарий на место.


// Task 5
// Создайте функцию f5, которая возвращает массив строку состоящую количества монет у кажого пользователя через пробел. Порядок - по id (возрастание). Т.е. я ожидаю от вас строку 4 8 12 56 43. Задача выполняется выборкой и последующей обработкой массива.

async function f5() {

}

// f5() - для проверки расскоментируйте, потом верните комментарий на место.


// Task 6
// Создайте функцию f6, которая первым запросом получает firstname пользователя с email = al@em, а вторым запросом записывает это firstname для пользователя с lastname Bro. Также функция должна возвращать данное firstname.

async function f6() {

}

// f6() - для проверки расскоментируйте, потом верните комментарий на место.