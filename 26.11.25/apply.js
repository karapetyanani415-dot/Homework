Function.prototype.myApply = function(thisArg, argsArray) {
  const orgThis = this
  let context; 
  if(thisArg === null || thisArg === undefined) {
    context = globalThis
    }else{
    context = Object(thisArg)
    }
  const key = Symbol('key')
  context[key] = fn;
  let result;
  if (argsArray) { 
      result = context[key](...argsArray)
  } else {
      result = context[key]()
  }
  delete context[key]
  return result
}