const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"];
const hewanJinak = ["Kucing", "Kelinci", "Ayam"];

const gabung = (hewanBuas,hewanJinak) =>{
    return [...hewanBuas,...hewanJinak];
}

const gabunganhewan = gabung (hewanBuas,hewanJinak);
console.log(gabunganhewan);



const petakanHewanJinak = (hewanJinak, makananKesukaan) => {
    return hewanJinak.map((hewan) => {
      return {
        namaHewan: hewan,
        makananKesukaan: makananKesukaan[hewan]
      };
    });
  }
  
  const makananKesukaan = {
    Kucing: "Ikan",
    Kelinci: "Wortel",
    Ayam: "Biji-bijian"
  };
  

    const hasilPemetaan = petakanHewanJinak(hewanJinak, makananKesukaan);
    setTimeout(()=> {
        console.log(hasilPemetaan);
},5000)





