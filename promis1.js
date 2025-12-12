const STATE = {
    PENDING: "pending",
    FULFILLED: "fulfilled",
    REJECTED: "rejected",
};


function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        return reject(new TypeError("Cannot resolve promise with itself"));
    }
    if (x instanceof MyPromise) {
        if (x.state === STATE.FULFILLED) {
            return resolve(x.value)
        } else if (x.state === STATE.REJECTED) {
            return reject(x.reason)
        } else { // pending
            x.then(
                y => resolvePromise(promise2, y, resolve, reject),
                r => reject(r)
            );
        }
        return
    }
    if (x !== null && (typeof x === "object" || typeof x === "function")) {
        let then
        let called = false

        try {
            then = x.then
        } catch (err) {
            return reject(err)
        }

        if (typeof then === "function") {
            try {
                then.call(
                    x,
                    y => {
                        if (called) return
                        called = true
                        resolvePromise(promise2, y, resolve, reject)
                    },
                    r => {
                        if (called) {
                            return
                        }
                        called = true
                        reject(r);
                    }
                );
            } catch (err) {
                if (!called) {
                    called = true
                    reject(err)
                }
            }
        } else {
            resolve(x)
        }
    } else {
        resolve(x)
    }
}


class MyPromise {
    constructor(executor) {
        this.state = STATE.PENDING
        this.value = null
        this.reason = null

        this.onFulfilledCallbacks = []
        this.onRejectedCallbacks = []

        const resolve = value => {
            if (this.state === STATE.PENDING) {
                this.state = STATE.FULFILLED
                this.value = value
                this.onFulfilledCallbacks.forEach(fn => fn())
                this.onFulfilledCallbacks = []
                this.onRejectedCallbacks = []
            }
        };

        const reject = reason => {
            if (this.state === STATE.PENDING) {
                this.state = STATE.REJECTED
                this.reason = reason
                this.onRejectedCallbacks.forEach(fn => fn())
                this.onFulfilledCallbacks = []
                this.onRejectedCallbacks = []
            }
        };

        try {
            executor(resolve, reject)
        } catch (err) {
            reject(err)
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === "function" ? onFulfilled : value => value
        onRejected = typeof onRejected === "function" ? onRejected : reason => { throw reason; }

        const promise2 = new MyPromise((resolve, reject) => {
            const asyncCall = fn => {
                if (typeof queueMicrotask === "function") {
                    queueMicrotask(fn)
                } else {
                    setTimeout(fn, 0)
                }
            };

            const handleFulfilled = () => {
                asyncCall(() => {
                    try {
                        const x = onFulfilled(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (err) {
                        reject(err)
                    }
                });
            };

            const handleRejected = () => {
                asyncCall(() => {
                    try {
                        const x = onRejected(this.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (err) {
                        reject(err)
                    }
                });
            };

            if (this.state === STATE.FULFILLED) {
                handleFulfilled()
            } else if (this.state === STATE.REJECTED) {
                handleRejected()
            } else {
                this.onFulfilledCallbacks.push(handleFulfilled)
                this.onRejectedCallbacks.push(handleRejected)
            }
        });

        return promise2
    }

    catch(onRejected) {
        return this.then(null, onRejected)
    }


// new MyPromise(res => res(42)).then(v => console.log(v))
// new MyPromise((res, rej) => rej("Error")).catch(e => console.log(e))

// let sync = true
// new MyPromise(res => res("async")).then(v => console.log(v,sync))
// sync = false

// new MyPromise(res => res(1))
//   .then(v => v + 1)
//   .then(v => v * 2)
//   .then(v => console.log(v))

// new MyPromise(res => res(10))
//   .then(v => { throw new Error("Oops"); })
//   .catch(e => console.log(e.message))

// new MyPromise(res => res(5))
//   .then(v => new MyPromise(res => res(v * 2)))
//   .then(v => console.log(v))

// new MyPromise(res => res("hi"))
//   .then(v => ({ then: (r) => r(v) }))
//   .then(v => console.log("bye", v))

// new MyPromise((res, rej) => { res("1"); rej("2"); })
//   .then(v => console.log(v))

const p = new MyPromise(res => res(1))
const p2 = p.then(() => p2)
p2.catch(e => console.log(s))
