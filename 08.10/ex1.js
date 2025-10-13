function for_each(arr,fn){
    const size = arr.length
    for(let i = 0; i < size ; i++){
        fn(arr[i])
    }
    return;
}
function foo(value){
    console.log(value * value)
}
const arr = [1,2,3,4,5]
arr.forEach(function(val){
    console.log(val * val)
})