function isLegal(age:number):boolean{
    if(age>=18){
        return true;
    }
    return false;
}

console.log(isLegal(20))