Function.prototype.myCall = function(thisArg,...args){

        const sym = Symbol();
        thisArg[sym] = this;
        const res = thisArg[sym](...args);
        delete thisArg[sym];

        return res;
}
