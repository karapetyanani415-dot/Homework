Function.prototype.myCall = function (context, ...args) {
  console.log(arguments)
  const sym = Symbol('uniq')
  Object.defineProperty(context, sym, {
    value: this,
    enumerable: false,
    configurable: true,
  })

  const result = context[sym](args)
  delete context[sym]
  return result
}