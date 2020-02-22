// buat sebuah function yang me-return angka paling kecil dari sebuah array of numbers;

function findSmallestNum(numArray){
    console.log(Math.min.apply(null , numArray))
}


findSmallestNum([34, 15, 88, 2]) // 2
findSmallestNum([34, -345, -1, 100]) // -345
findSmallestNum([-76, 1.345, 1, 0]) // -76
findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]) // -0.9999
findSmallestNum([7, 7, 7]) // 7