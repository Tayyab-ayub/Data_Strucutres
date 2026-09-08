// Find the largest element without using sort method
const arr = [20, 45, 6, 2, 3, 49, 78, 90, 100];
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log("The largest number in array is: ", findMax(arr));