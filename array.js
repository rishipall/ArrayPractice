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

let arr = [3,-4,5,4,-1,1,-8]
let curr = 0;
let max = -1;
for(let i = 0;i<arr.length;i++){
     curr +=arr[i]
     max = Math.max(curr, max)
     if(curr<0){
        curr = 0
     }
}
console.log(max);
console.log(max);