const fs=require('fs');
const path =require('path')
// Task-1 читання файлів
//Way 1

/*fs.readFile('t1.txt','utf-8',(err,data)=>{
    console.log(data)
})*/
/*
let text= fs.readFileSync('t1.txt','utf-8')
console.log(text)

console.log('===========================')*/


/*
fs.readdir('one',(err,data)=>{
    //console.log(data)
    data.forEach(file=>{
        console.log(file+' extention: '+ path.extname(file) +' Розмір файлу: '+fs.statSync('one/'+file).size)
    })
})
*/


// Task 8
// Напишите функцию t8 принимает имя папки и выводит и возвращает суммарный размер файлов в ней.

/*function t8(exPath) {
    fs.readdforEach(file=>{
            let filesize= fs.statSync(exPath+'/'+file).size
            ollSize+=filesize

    })
        console.log(ollSize)
})
}
console.log(t8('one'));*/

/*console.log('Task 7')
function t7(exPath) {
    fs.readdir(exPath,(err,data)=>{
        data.forEach(file=>{
            console.log("extension" + path.extname(file))
        })
    })
}
console.log(t7('unit_06'));
console.log("Кінець програми")*/


console.log('Task 7')
function t7(exPath) {
    let ext= fs.readdir(exPath,(err,data)=>{
        data.forEach(file=>{
            console.log("extension" + path.extname(file))
        })
    })
}
console.log(t7('unit_06'));
console.log("Кінець програми")