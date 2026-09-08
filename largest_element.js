// Find Second Largest Number in an array
const arr = [2, 5, 7, 8, 9, 20, 6, 45]

function findSecondMax(arr) {
    const sorted = [...arr].sort((a, b) => b - a)
    const largest = sorted[0];
    for (let i = 1; i <= sorted.length; i++) {
        if (sorted[i] !== largest) {
            return sorted[i];
        }

    }
    return -1;

}

console.log("The second Largest Number in an array is: ", findSecondMax(arr));


// Find largest number in an array
const array = [20, 5, 8, 78, 45];

function largest(array) {
    const sorted = [...array].sort((a, b) => b - a)
    return sorted[0];
}
console.log("The largest number in array is: ", largest(array));

