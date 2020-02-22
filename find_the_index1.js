// 3. buat function untuk mencari index dari sebuah array;
// keyword google "Javascript array findIndex"
// atau gunakan loops dan buat kondisi untuk mendapatkan indexnya.

/* NB: 
jika tidak menemukan indexnya return -1
*/
function search(arr,angka){
    function src(element){
        return element === angka
    }
    console.log(arr.findIndex(src))
}
search([1, 5, 3], 5) // 1
search([9, 8, 3], 3) // 2
search([1, 2, 3], 4) // -1
search([9, 7, 2], 9) // 0