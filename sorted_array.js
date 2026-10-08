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
    const sorted_array = [...arr].sort((a,b) => a- b );
    return sorted_array;

}
console.log("The sorted array in ascending order is: ", sorted(arr));



// const arr = [2,8,89,75,65,41,21];
// function sorted_array(arr){
//   for (let i = 1; i < arr.length; i++){
//     if(arr[i] < arr[i-1]){
//       return false;
//     }
   
//   }
//    return true;
// }
// console.log("The sorted array without the sort function will be:" , sorted_array(arr));