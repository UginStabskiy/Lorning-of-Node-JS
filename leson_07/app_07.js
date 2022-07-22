const fs=require('fs');
// Task 1
//Создайте функцию f1, которая при запуске из массива ar1 создаем файл ar1.json в текущей папке.

const f1 = (ar) => {
    fs.writeFile('ar1.json',JSON.stringify(ar1),(err)=>{
        if(err) console.log('ERROR')

    })
};

const ar1 = {
    test: 1,
    code: 2,
};

// f1(ar1); для проверки. Должен быть закомментирован

// Task 2
//Создайте функцию f2, которая при запуске из массива ar2 создаем файл ar2.json в текущей папке.

const f2 = (ar) => {
    fs.writeFile('ar2.json',JSON.stringify(ar2),(err)=>{
        if(err) console.log('ERROR')

    })
};

const ar2 = [1, 2, 3];


// f2(ar2); для проверки. Должен быть закомментирован

// Task 3
//Создайте функцию f3, которая при запуске выводит содержимое файла j3.json в консоль.

const f3 = (ar) => {
    let JsonData=require(ar)
    console.log(JsonData)
};

// f3('./j3.json'); для проверки. Должен быть закомментирован

// Task 4
//Создайте функцию f4, которая при запуске выводит содержимое файла j4.csv в консоль.

const path = require('path');
const csv = require('csv-parser');
const results=[]
const f4 = (ar) => {
    fs.createReadStream(ar)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            console.log(results);
        });
};
//f4('j4.csv')
// f4(j4.csv); для проверки. Должен быть закомментирован

// Task 5
//Создайте функцию f5, которая при запуске записывает массив ar5 в CSV файл t5.csv. Имена колонок Car, Legal, Color. Разделитель - запятая.


const createCsvWriter = require('csv-writer').createObjectCsvWriter

const f5 = (ar) => {
    const csvWriter = createCsvWriter({
        path: ar,
        header: [
            {id: 'car', title: 'Car'},
            {id: 'nn', title: 'Legal'},
            {id: 'color', title: 'Color'},
        ]
    });
    let ar5 = [
        {
            car: 'audi',
            nn: 'er5634p',
            color: 'red'
        },
        {
            car: 'bmw',
            nn: 'bb8234p',
            color: 'blue'
        },
    ]
    csvWriter.writeRecords(ar5)
        .then(() => console.log('The CSV file was written successfully'));

};
//f5('t5.csv')
// f5('t5.csv'); для проверки. Должен быть закомментирован

// Task 6
//Создайте функцию f6, которая при запуске записывает массив ar5 в CSV файл t6.csv. Имена колонок Car, Legal, Color. Разделитель - точка с запятой.

const f6 = (ar) => {
    const csvWriter = createCsvWriter({
        path: ar,
        fieldDelimiter:";",
        header: [
            {id: 'car', title: 'Car'},
            {id: 'nn', title: 'Legal'},
            {id: 'color', title: 'Color'},
        ]
    });
    let ar5 = [
        {
            car: 'audi',
            nn: 'er5634p',
            color: 'red'
        },
        {
            car: 'bmw',
            nn: 'bb8234p',
            color: 'blue'
        },
    ]
    csvWriter.writeRecords(ar5)
        .then(() => console.log('The CSV file was written successfully'));

};
//f6('t6.csv')
// f6('t6.csv'); для проверки. Должен быть закомментирован

// Task 7
//Создайте функцию f7, которая при запуске выводит содержимое файла t6.csv в консоль.

const f7 = (ar) => {
    fs.createReadStream(ar)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            console.log(results);
        });
};
//f7('t6.csv')
// f7('t6.csv'); для проверки. Должен быть закомментирован
