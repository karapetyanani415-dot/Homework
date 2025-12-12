function some_(arr,fn){
    let size = arr.length
    for(let i = 0;i < size; i++){
        if(some1(arr[i],i,arr)){
            return true
        }
    }
    return false
}
function some1(value,index,arr){
    return value>10
}
const arr = [1,2,21,10]
console.log(some_(arr,some1))