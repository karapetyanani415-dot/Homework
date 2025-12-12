Function.prototype.mybind = function(thisArg) {
  const origthis = this
  const boundargs = Array.prototype.slice.call(arguments, 1)
  const resthis = function() {}
  const bound = function() {
      const callArgs = Array.prototype.slice.call(arguments)
      let This
      if (this instanceof resthis) {
         This = this
      } else {
          This = thisArg
      }
      return origthis.apply(This, boundargs.concat(callArgs))
  }
  return bound
}