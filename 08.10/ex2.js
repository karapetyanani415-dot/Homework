function map(arr,fn){
    const result = []
    const size = arr.length
    for(let i=0;i<size;i++){
        result.push(fn(arr[i]))
    } 
    return result
}
const arr = [10,20,30,40]
const result_map = map(arr,function(value){
    return value * 2
})
console.log(result_map)