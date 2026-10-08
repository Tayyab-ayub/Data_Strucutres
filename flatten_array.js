const array = [1, [2, 3], [4, [5, 6]], 7];
 function flatten_Array(array){
    let result = []
    for (let i = 0 ; i < array.length ; i++){
        if (Array.isArray(array[i])){
            result = result.concat(flatten_Array(array[i]))
        }
        else{
            result.push(array[i])
        }
        
    }
    return result;
 }
 
 console.log(flatten_Array(array));