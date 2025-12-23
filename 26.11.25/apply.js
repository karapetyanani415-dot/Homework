Function.prototype.myApply = function(thisArg,args){

        const sym = Symbol();
        thisArg[sym] = this;
        let res;

        if(args){
            res = thisArg[sym](...args);
        }else{
            res = thisArg[sym]();
        }
        return res;
}
