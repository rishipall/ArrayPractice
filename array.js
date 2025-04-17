// // maximun  subarray sum kadane's algorithm brutforce way 
// let arr =[1,0,-6,4,5]
// let b = -1;
// for(let st = 0;st<arr.length;st++){
//     let arrsum = 0;
//     for(let end = st;end<arr.length;end++){
//       arrsum += arr[end]
//      b =  Math.max(arrsum , b)
//     }
//     // console.log(arrsum);
// }
// console.log(b);


// maximun  subarray sum kadane's algorithm

// let arr = [3,-4,5,4,-1,1,-8]
// let curr = 0;
// let max = Infinity_min;
// for(let i = 0;i<arr.length;i++){
//      curr +=arr[i]
//      max = Math.max(curr, max)
//      if(curr<0){
//         curr = 0
//      }
// }
// console.log(max);
// console.log(max);

// two sum 


// let arr = [1,2,3,4,5]
// let copy = []
// let target = 8;
// for(let i = 0;i<arr.length;i++){
//    for(let j = i+1;j<arr.length;j++){
//       if(arr[i] + arr[j] == target){
//          copy.push(i,j)
//       }
//    }
// }
// console.log(copy);


let arr = [1,2,3,4,5,6,7,8,9]
let target = 15;
let i = 0;
let j = arr.length-1
while(arr[i] + arr[j] != target){
   if(arr[i] + arr[j] > target){
      j--;
   }else{
      i++;
   }
}
console.log( i , j);