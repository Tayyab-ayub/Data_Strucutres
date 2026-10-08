
// Move zeros to right
// const arr = [12,0,4,5,7,8,0,9]

// function moveZeros(arr){

//     let index = 0;
//     for(let i = 0 ; i < arr.length; i++){
//         if(arr[i] !== 0){
//             arr[index] = arr[i];
//             index++;
//         }
//     }
//     while (index < arr.length){
//         arr[index] = 0;
//         index++;
    
//     }
//     return arr;
// }
//  console.log(moveZeros(arr));


//  Move zeros to left
const arr = [12,0,4,5,7,8,0,9]

function moveZeros(arr){

    let index = arr.length - 1 ;
    for(let i = arr.length - 1  ; i >= 0; i--){
        if(arr[i] !== 0){
            arr[index] = arr[i];
            index--;
        }
    }
    while (index >= 0){
        arr[index] = 0;
        index--;
    
    }
    return arr;
}
 console.log(moveZeros(arr));
