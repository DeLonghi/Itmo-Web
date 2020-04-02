// Реализуйте функцию sum

function sum() {
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum
}

console.log(sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));
