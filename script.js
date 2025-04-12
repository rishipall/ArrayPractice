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

// let arr = [1,2,3,1,2,3,4,5,0]
// let unique = [];

// for(let i = 0;i<arr.length;i++){
//     let count = 0;
//     for(let j =0;j<arr.length;j++){
//         if(arr[i] == arr[j]){
//             count++;
//         }
//     }
//     if(count == 1){
//         unique.push(arr[i])
//     }
// }
// console.log(unique);


// wap to swap the minimun and maximun number in an array 
// let arr = [8,81,2,3,4,5,6,7,8,9]
// let min = 0
// let max = 0

// for(let i = 0;i<arr.length;i++){
//     if(arr[i]>arr[max]){
//         max = i
//     }
//     if(arr[i]<arr[min]){
//         min = i
//     }
  
// } 
//  console.log("Before SWapping ");
// console.log(min);
// console.log(max);
//     let temp = min
//     min = max
//     max = temp
// console.log("After SWapping ");
// console.log(min);
// console.log(max);


// reverse the array using two pointer algorithm 
let arr = [1,2,3,4,5,6,7,8,9,10]
let i = 0
let j = arr.length-1
while(i<j){
    let temp = arr[i]
    arr[i] = arr[j];
    arr[j] = temp;
    i++
    j--
}
console.log(arr);
console.log(String.fromCharCode(30));