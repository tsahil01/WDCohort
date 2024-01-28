function fun1(fun2: ()=>void){
    setTimeout(fun2, 3000);
}

function fun2(){
    console.log("Helloo")
}

fun1(fun2)