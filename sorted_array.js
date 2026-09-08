// sorted_array
const arr = [3, 5, 8, 9, 7, 97, 45, 67, 89]
function sortedArray(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}
console.log("Is the array sorted in ascending order? ", sortedArray(arr));

function sorted(arr){
    const sorted_array = [...arr].sort((a,b) => b - a);
    return sorted_array;

}
console.log("The sorted array in descending order is: ", sorted(arr));