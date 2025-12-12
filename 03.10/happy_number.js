function is_happy(num){
    let count = 0;
    while(num !== 1 && count < 50){
    let sum = 0
    while(num > 0){
        let x = num % 10
        sum += x * x
        num = Math.floor(num/10)
    }
    num = sum
    count++
    }
    if(num == 1){
        return "happy"
    }else{
        return "unhappy"
    }
}

console.log(is_happy(2))
console.log(is_happy(19))