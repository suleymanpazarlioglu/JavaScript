// we are using new Promise(function(resolve,reject))

let stateOfTheWebPage= function(state){
    return new Promise(function(resolve,reject){
        if(state){
            resolve("page is loaded")
        }else {
            reject("page is not loaded yet")
        }
    })
};

console.log(stateOfTheWebPage(true).then((result) => {
    console.log(result);
}));

console.log(stateOfTheWebPage(false).catch(function(errorMsg){
    console.log(errorMsg);
}));

new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(1)
    }, 3000);
}).then((result)=> {
    console.log(result);  //1
    return result*2;
}).then((result2)=>{
    console.log(result2);  //2
    return result2*2;
}).then((result3)=>{
    console.log(result3);  //3
    return result3*2;
});
   
