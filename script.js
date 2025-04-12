// find the intersection of two array 

// let arr1 = [6,7,3,1]
// let arr2 = [1,2,3,4,5]


// for(let i = 0;i<arr1.length;i++){
//     for(let j = 0;j<arr2.length;j++){
//             if(arr1[i] ==arr2[j]){
//                 console.log(arr1[i]);
//             }
//     }   
// }

/// wap to print the unique number in an array  

let arr = [1,2,3,1,2,3,4,5,0]
let unique = [];

for(let i = 0;i<arr.length;i++){
    let count = 0;
    for(let j =0;j<arr.length;j++){
        if(arr[i] == arr[j]){
            count++;
        }
    }
    if(count == 1){
        unique.push(arr[i])
    }
}
console.log(unique);