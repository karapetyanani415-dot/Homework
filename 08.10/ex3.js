function filter(arr,fn){
    const size = arr.length
    const result = []
    for(let i = 0 ;i<size;i++){
        if(i in arr){
            if(fn(arr[i])){
                result.push(arr[i])
            }
        }
    }
    return result
}
function foo(value){
    if(value>30){
        return true
    }
    return false
}
const arr = [10,20,30,40,50]
const res = filter(arr,foo)
console.log(res)