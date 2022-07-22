//Установите Node.js с сайта программы. Повторите действия урока.

console.log('Если вы это видите - то сделали!!!');

// Task 2. Напишите функцию f2, которая принимает 2 числа и выводит и возвращает максимальное из них. Для этого используйте Math.

const f2 = (a, b) => {
    let maxNum = Math.max(a,b)
    console.log(maxNum)
}
f2( 10,99)

// Task 3. Напишите функцию f3, которая выводит и возвращает случайное число от 0 до 10.

const f3 = () => {
    let randNum=Math.floor(Math.random()*10)
    console.log(randNum)
}
f3()

// Task 4. Напишите функцию f4, которая выводит и возвращает случайное число от a до b.


const f4 = (a, b) => {
    let randAB=Math.floor((Math.random()*(b-a+1))+a)
    console.log(randAB)
}
f4(10,99)

// Тask 5. Напишите фукнцию f5, которая выводит и возвращает текущую дату в формате год-месяц-день. Причем делает это с ведущим нулем.
// Пример 2020-03-22

const f5 = () => {
    let oldData=new Date().toLocaleDateString()
    console.log(oldData)
    let midlData=oldData.split(".")
    console.log(midlData)
    let nuwData=midlData[2]+'.'+midlData[1]+'.'+midlData[0]
    console.log(nuwData)
}
f5()
//Task 6. Напишите функцию f6, которая проверяет является ли введенный год високосным. Возвращает true если да, и false если нет. 


const f6 = (year) => {
    if ((year % 4===0) && (year % 100 !== 0)) {
        console.log(year +' рік є високосним')
    }else{
        console.log(year + ' рік нє є високосним')
    }
}
f6(2008)