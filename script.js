// find the intersection of two array 

let arr1 = [6,7,3,1]
let arr2 = [1,2,3,4,5]


for(let i = 0;i<arr1.length;i++){
    for(let j = 0;j<arr2.length;j++){
            if(arr1[i] ==arr2[j]){
                console.log(arr1[i]);
            }
    }   
}
