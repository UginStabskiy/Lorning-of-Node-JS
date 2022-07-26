const config=require('./config')

module.exports= function (a){
    randomString=""
    for(i=1;i<=a;i++){
        randomNumber=Math.floor(Math.random()*(config.length+1))
        randomString=randomString+config[randomNumber]
    }
    //console.log(randomString) // whay when console.log it returns undefiyned.
    return randomString
};
