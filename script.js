let gaji = 5000000;
let i = 1;
let absensi;

do {
    let bonus = 0;
    
    if (i > 20) {
        bonus = 500000;
    }
    
    let hasil = gaji + (200000 * i) + bonus; 
    console.log(`Gaji hari ke-${i} berjumlah: ${hasil}`);

    absensi = confirm("Apakah anda telat?");
    
    if (absensi) {
        hasil -= 5000000;
        console.log(`Yahh, Anda telat! Gaji dipotong 5jt. Sisa gaji: ${hasil}`);
        break;
    }

    i++; 
} while (i <= 30); 
