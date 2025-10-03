/*function find_text(text, mas) {
    for (let i = 0; i <= text.length - mas.length; i++) {
        let j = 0;
        for (; j < mas.length; j++) {
            if (text[i + j] !== mas[j]) 
            break;
        }
        if (j === mas.length) {
            return true;
        }   
    }
    return false;
}

console.log(find_text("Learning JavaScript", "Java")); */

let text = "Learning JavaScript";
let part= "Java";
console.log(text.includes(part));