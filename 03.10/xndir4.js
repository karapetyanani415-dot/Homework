function reserve (str){
    let size = str.length - 1
    let result=[]
    for(let i = size; i >= 0; --i){
        result+=str[i]
    }
    return result
}
console.log(reserve("hello"))