function main(numb1) {
    return function (numb2) {
        return numb1 + numb2
    }
}

let b = main(45)
let summa = b(5)
console.log(summa)