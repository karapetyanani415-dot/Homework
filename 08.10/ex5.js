function every_(arr,fn){
    for(let i=0; i<arr.length;i++){
        if(!ever1(arr[i])){
            return false;
        }
    }
    return true;
}
function ever1(value){
    return value>10
}
const arr = [11,12,21,110]
console.log(every_(arr,ever1))