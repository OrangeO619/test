function fn(){
    let count = 0
    /* function get_count(){
        return count
    }
    function increment(){
        return count++
    } */
    return {
        get:()=>count,
        increment:()=>++count
    }
}
const res = fn()
console.log(res.get())
console.log(res.increment())
console.log(res.get())