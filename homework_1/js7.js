let numList = [3, 6, 9, 12]
let index=0;
for(let i = 0; i<numList.length; ++i){
    if(numList[i] == 9){
        index=i
        index++
    }
}
console.log(index);