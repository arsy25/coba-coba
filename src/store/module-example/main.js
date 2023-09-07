const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const biodata = {
  nama: '',
  alamat: '',
  tanggalLahir: ''
}

rl.question('Masukkan Nama: ', (nama) => {
  biodata.nama = nama
  rl.question('Masukkan Alamat: ', (alamat) => {
    biodata.alamat = alamat
    rl.question('Masukkan Tanggal Lahir (dd/mm/yyyy): ', (tanggalLahir) => {
      biodata.tanggalLahir = tanggalLahir
      hitungUmur()
      rl.close()
    })
  })
})

function hitungUmur () {
  const dateParts = biodata.tanggalLahir.split('/')
  if (dateParts.length === 3) {
    const tanggalLahir = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`)
    const sekarang = new Date()
    const selisihTahun = sekarang.getFullYear() - tanggalLahir.getFullYear()

    console.log(`Nama: ${biodata.nama}`)
    console.log(`Alamat: ${biodata.alamat}`)
    console.log(`Tanggal Lahir: ${biodata.tanggalLahir}`)
    console.log(`Umur: ${selisihTahun} tahun`)
    console.log('Kategori: ', getKategoriUmur(selisihTahun))
  } else {
    console.log('Format tanggal lahir tidak valid')
  }
}

function getKategoriUmur (umur) {
  if (umur >= 0 && umur <= 5) {
    return 'Balita'
  } else if (umur > 5 && umur <= 10) {
    return 'Anak-anak'
  } else if (umur > 10 && umur <= 17) {
    return 'Remaja'
  } else {
    return 'Dewasa'
  }
}
