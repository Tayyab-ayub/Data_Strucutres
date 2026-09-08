// Reverse an array in place
const arr = [89,56,78,45,12,23,63];
let left = 0;
let right = arr.length - 1;

function reverseArray(arr) {
    while (left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++;
        right--;
    }
    return arr;
}
console.log("The reversed array is: ", reverseArray(arr));

