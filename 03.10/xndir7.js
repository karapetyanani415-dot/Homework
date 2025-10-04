function find(arr,target){
    for(let i = 0;i < arr.length-1; ++i){
        for(let j = i + 1;j < arr.length; ++j){
            if(arr[i] + arr[j] == target){
                return [i , j]
            }
        }
    }
    return [-1 , -1]
}
console.log(find([1,7,4,6,10,8],5)) 
