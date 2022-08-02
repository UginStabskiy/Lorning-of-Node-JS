module.exports= function (a,b){
    const result={};
    a.forEach(e=>result[e[b]]=e)
    return result
};