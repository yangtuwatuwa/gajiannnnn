let gaji = 5000000;
let i = 1;
let absensi;
function mulaiiii(){
    do {
        let bonus = 0;
        if (i > 20) {
            bonus = 500000;
        }
        absensi = confirm("Apakah anda telat?");
        let hasil = gaji + (200000 * i) + bonus; 
        alert(`Gaji hari ke-${i} berjumlah: ${hasil}`)
        if (absensi == true) {
            hasil -= 5000000;
            alert(`Yahh, Anda telat! KAMU SAYA PECAT DAN Gaji dipotong 5jt. Sisa gaji: ${hasil}`);
            break;
        }
        i++; 
    } while (absensi === false); 
}
