// Find the largest and smallest numbers in an array without using sorting.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let largest = array[0];
let smallest = array[0];

for (let i = 1; i < array.length; i++) {
    if(array[i]>largest){
        largest=array[i]
    }
    if(array[i]<smallest){
        smallest= array[i]
    }
    
}
console.log("smallest", smallest)
console.log("largest", largest)
