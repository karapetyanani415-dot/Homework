function sub_find(arr,target){
    for(let i = 0;i < arr.length; ++i){
        let equal = true
        for(let j = 0;j < target.length; ++j){
            if(arr[i+j] !== target[j]){
                equal = false
                break
            }
        }
        if(equal){
            return true
        }
    }
    return false
}

console.log(sub_find("LearninJava","Java"))