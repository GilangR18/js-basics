// buat function yang memerima sebuah array kata 
//dan mengubahnya menjadi array of panjang kata tersebut 

function wordLengths(arr) {
    var result = [];
    for(let i=0;i < arr.length;i++){
        result.push(arr[i].length)
    }
    return result
}

// TIPS:
/* gunakan array methods seperti array.push */

console.log(wordLengths(["hello", "world"])) // [5, 5]
console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"])) // [9, 12, 9]
console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"])) // [3, 5, 9, 4, 2, 3, 8]