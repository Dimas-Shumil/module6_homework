function sum (a, b){
    const x = setInterval(function () {
        if ( a >= b ){
            clearInterval(x)
        }
        console.log(a)
        a = a+1
    },1000)

}
sum(5, 15)