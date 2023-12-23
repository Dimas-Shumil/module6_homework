function chetnoeNechetnoe(arr) {
    let chetnoe = 0
    let nechetnoe = 0
    arr.forEach(function (item, index, array){
        if (typeof item ==="number"){
            if (item % 2===1){
                nechetnoe = nechetnoe + 1
                console.log(item + ' nechetnoe')
            }else{
                chetnoe = chetnoe + 1
                console.log(item + ' chetnoe')
            }
        }
    })
    console.log(chetnoe)
    console.log(nechetnoe)
}

let arr = [2, 14, 5, null, 'kek', 33, 7, 'lol']
chetnoeNechetnoe(arr)