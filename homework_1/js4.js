let text = "hello"
let reserve = " ";
let i = text.length-1

while(i>=0){
    reserve += text[i]
    i--
}
console.log(reserve);