function sum_element_array(size,arr){
    let sum = 0;
    for(let i = 0; i < size; i++){
        sum+=arr[i];
    }
    return sum;
}
let arr = [50 , 75 , 100]
console.log(sum_element_array(arr.length,arr))