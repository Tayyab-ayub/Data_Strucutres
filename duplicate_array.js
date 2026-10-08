const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5]

// function duplicates_array(arr){
//     return [...new Set[arr]];
// }

// console.log("The new duplicates_array is: ", duplicates_array(arr))


function duplicate_array(arr){
    let result = [];

    for (let i = 0; i < arr.length; i++){
        if(!result.includes(arr[i])){
            result.push(arr[i])
        }
    }
    return result;
}
console.log("The new duplicate_array is: ", duplicate_array(arr))
