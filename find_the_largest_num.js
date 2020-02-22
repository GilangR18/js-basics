// buat sebuah function yang me-return angka paling besar dari sebuah array of numbers;



// there are no negative numbers.
function findLargestNum(numArray){
    console.log(Math.max.apply(null , numArray))
}
findLargestNum([4, 5, 1, 3]) // 5
findLargestNum([300, 200, 600, 150]) // 600
findLargestNum([1000, 1001, 857, 1]) // 1001