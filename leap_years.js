// Buat function untuk me-return tahun kabisat dari range tahun yang diberikan
// misalanya 2015-2020 ada 2 tahun kabisat yaitu 2016 dan 2019

function showKabisat(awal,akhir) {
  for( let i=awal;i <= akhir;i++) {
    if(i % 4 === 0){
      console.log("kabisat")
    }
    else if(i % 100 === 0){
      console.log("kabisat")
    }
     else{
      console.log("bukan kabisat")
    }
  }
  // kalian bisa lihat defenisi tahun kabisat di wikipedia.
  // serta algoritma untuk menentukan tahun kabisatya.
}

showKabisat(2016,2020)

