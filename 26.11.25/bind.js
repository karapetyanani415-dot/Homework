Function.prototype.myBind = function(thisArg,...arg1){
    
    const a = this;

    return function(...arg2){
        
        return a.apply(thisArg,[...arg1,...arg2]);
    }
}
