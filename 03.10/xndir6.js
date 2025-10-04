let text = "Learning JavaScript"
let sub = "Javfa"
for(let i = 0;i < text.length; ++i){
    let equal = true
    for(let j = 0;j < sub.length; ++j){
        if(text[i+j] !== sub[j]){
            equal = false 
            console.log(equal)
            break
        }
    }
    if(equal){
        console.log(true);
    }
}
