function* generatorFunction() {
    for (let i = 0; i < 5; i++) {
        yield i
    }
}

const iter = generatorFunction()

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
