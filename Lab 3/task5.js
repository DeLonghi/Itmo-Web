function createCounter() {
    // Реализуйте функцию, чтобы программа вывела на консоль ожидаемый результат

    var currentCount = 1;

    return function() {
        return currentCount++
    };
}

const count = createCounter();

count(); // 1
count(); // 2
count(); // 3
count(); // 4

console.log(count()); // 5