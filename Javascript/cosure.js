function outer(){
    let count=0
    function inner(){
        count++
        console.log(count)
    }
    return inner
}
let o=outer()
o()
o()
o()
o()