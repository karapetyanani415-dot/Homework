function indexof_(value,arr){
    for(let i=0;i<arr.length;i++){
        if(value===arr[i]){
            return i;
        }
    }
    return -1
}
const arr = [1,2,3,4,5]
console.log(indexof_(4,arr))