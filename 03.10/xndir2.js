function upper_text(text){
   let i = 0;
   let result = " " ;
    while(text[i] !== undefined){
        let symvol = text.charCodeAt(i)
        symvol = symvol - 32;
        result += String.fromCharCode(symvol); 
        i++;
   }
   return result;
}
console.log(upper_text("hello"));
//let text = "hello"
//console.log(text.toUpperCase())