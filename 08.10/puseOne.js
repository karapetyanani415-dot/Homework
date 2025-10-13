function one_sum(arr){
    let size = arr.length
    for(let i=size-1;i=>0;i--){
    if(arr[i]!=9){
         arr[i]=++arr[i]
        return arr
    }else{
      arr[i]=0  
      arr.unshift(1)
      return arr
    }
   
}

   
}
const arr= [1,2,3,99]
console.log(one_sum(arr))