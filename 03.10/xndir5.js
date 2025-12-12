let array1 = [1, 2]
let array2 = [3, 4]
let all_arr = []
/*let i = 0
while (i<array1.length){
    all_arr.push(array1)
    i++
}
while (i<array2.length){
    all_arr.push(array2)
    i++
}
console.log(all_arr);*/
all_arr = array1.concat(array2);
console.log(all_arr);