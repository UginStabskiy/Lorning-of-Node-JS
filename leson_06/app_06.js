const fs = require ('fs');
const path = require('path');
// Task 1
// Напишите функцию t1, которая  выводит содержимое файла t1.txt в папке home6. Помимо вывода функци должна возвращать данное значение.
console.log('Task 1')

function t1() {
    let dataFromT1 = fs.readFileSync('home6/Вкроніка.txt','utf-8')
        return dataFromT1
}
console.log(t1());


// Task 2.

// Напишите функцию t2, которая  выводит содержимое файла указанного в параметрах файла. Помимо вывода функци должна возвращать данное значение.
console.log('Task 2')

function t2(filePath) {
    let date_t2 = fs.readFileSync(filePath,'utf-8')
    //console.log(date_t2)
    return date_t2
}

let filePath = 'home6/Вкроніка.txt'; //'examplepatthfile'
console.log(t2(filePath));


// Task 3.
// Напишите функцию t3, которая  выводит список файлов указанной в параметре папки ( в виде массива ) и возвращает данный массив.
console.log('Task 3')
function t3(folderName) {
    ArrOfNames= fs.readdirSync(folderName)
        //console.log(ArrOfNames)
        return ArrOfNames
}

console.log(t3('home6'));

// Task 4
// Напишите функцию t4 которая принимает имя файла и возвращает его размер в килобайтах (только число)
console.log('Task 4')

function t4(filepath) {
    return ((fs.statSync(filepath).size)/1000 + " KB")
}

console.log(t4('home6/Вкроніка.txt'));



// Task 5
// Напишите функцию t5, которая принимает параметр число ( например размер) и возвращает строку по правилам
//если число от 0 до 99 то просто возвращает эту строку и добавляет B
//    512 -> 512B
// если число от 1000 до 999 999 то делит на 1000 и добавляет kB
// 30000 -> 30кB
// если число от 1000000 и выше то делит на 1000000 и добавляет MB
// 13000000 -> 13MB
console.log('Task 5')
function t5(a) {
    if (a>0 && a<99){
        return a + ' B'
    }
    if (a>1000 && a<999999){
        return a/1000 +' kB'
    }
    if (a>1000000){
        return a/1000000 +' MB'
    }
}

console.log(t5(34958));//34958


// Task 6
// Напишите функцию t6 которая выводит содержимое папки. В одной строке выводится имя файла, пробел его размер ( используем t5) перенос строки.
console.log('Task 6')
function t6(exFolder) {
    const data= fs.readdirSync(exFolder)
    data.forEach(file=> {
        console.log (file + "__" + t5(fs.statSync(`${exFolder}/${file}`).size))
    });
}

t6('home6');

// Task 7
// Напишите функцию t7, которая принимает путь к файлу и выводит и возвращает его расширение. 
console.log('Task 7')
function t7(exPath) {
    const data=fs.readdirSync(exPath)
    data.forEach(file=>{
        console.log("extension" + path.extname(file))
    })
}
t7('home6')
//console.log(t7('home6'));

// Task 8
// Напишите функцию t8 принимает имя папки и выводит и возвращает суммарный размер файлов в ней.
console.log('Task 8')

function t8(exPath) {
    const data = fs.readdirSync(exPath)
    let ollSize=0
    data.forEach(file=>{
        let filesize= fs.statSync(exPath+'/'+file).size
        ollSize+=filesize
    })
    console.log(ollSize)
}

t8('home6')
//console.log(t8('home6'));
// Task 9
// Создайте функцию t9, которая принимает два параметра - имя папки и файла и проверяет есть ли данный файл в папке. Функция должна возвращать true или false.
console.log('Task 9')
function t9(folder, file) {
    return fs.existsSync(`${folder}/${file}`)
}

console.log(t9('home6', 'Вкроніка.txt'));


// Task 10
// Создайте функцию t10, которая принимает имя файла и которая возвращает false если файла нет в текущей папке или его размер равен нулю и размер файла если он существует и его размер больше нуля.
console.log('Task 10')
function t10(a) {
    fileSize = fs.statSync(a).size
    if (fs.existsSync(a) && fileSize!==0 ) {
        return fs.statSync(a).size
    } else {
        return false
    }
}
console.log(t10('123.txt'));