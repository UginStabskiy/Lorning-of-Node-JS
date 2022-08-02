const config=require('./config')
const randomint=require('./rand')
const config2=require('./config2')
const indexArray=require('./indexArray')
const lenghArrRandom=require('./hash/index')


console.log(config)
console.log(randomint(20,10))
console.log(config2)
a = [
    { id : 24, name : 'Test', age : 23},
    { id : 34, name : 'User', age : 33}
]

console.log(indexArray(a, 'id'))

console.log(lenghArrRandom(20))
