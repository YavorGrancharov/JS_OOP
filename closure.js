let fibonachi = function () {
    let memo = [0, 1]
    let fib = function (n) {
        let result = memo[n]
        if (typeof result !== 'number') {
            result = fib(n - 1) + fib(n - 2)
            memo[n] = result
        }
        return result
    }
    return fib
}()

for (let i = 0; i <= 10; i++) {
    console.log(fibonachi(i))
}

let memoizer = function (memo, fundamental) {
    let shell = function (n) {
        let result = memo[n]
        if (typeof result !== 'number') {
            result = fundamental(shell, n)
            memo[n] = result
        }
        return result
    }
    return shell
}

let fibo = memoizer([0, 1], function (shell, n) {
    return shell(n - 1) = shell(n - 2)
})

console.log(fibo())