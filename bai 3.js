let total = 0;
let arr = [2, 3, 4, 5, 6, 7, 8, 9]

function check(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) return true
    }
    return false;
}

function sum(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (check(arr[i]) == false) {
            total += arr[i]
        }
    }
    return total
}
document.write("tong so nguyen to la " + sum(arr))
