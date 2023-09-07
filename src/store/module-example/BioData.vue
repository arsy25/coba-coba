<template>
  <q-page class="q-pa-md bg-cyan-2">
    <q-card class="q-pa-md">
      <q-card-section>
        <q-badge class="row q-mb-md text-center">Form Biodata</q-badge>
        <q-input rounded outlined class="col q-mb-md" v-model="nama" label="Nama" />
        <q-input rounded outlined class="col" v-model="alamat" label="Alamat" />
        <br />
        <q-input
          rounded
          outlined
          v-model="tanggalLahir"
          label="Tanggal Lahir (dd/mm/yyyy)"
          @input="hitungUmur"
        />
        <div>
          <q-btn label="Submit" color="primary" @click="hitungUmur" />
        </div>
      </q-card-section>
      <q-separator />
      <q-card-section v-if="umur !== null">
        <h2 class="q-mb-md text-center">Hasil</h2>
        <p><strong>Nama:</strong> {{ nama }}</p>
        <p><strong>Alamat:</strong> {{ alamat }}</p>
        <p><strong>Tanggal Lahir:</strong> {{ tanggalLahir }}</p>
        <p><strong>Umur:</strong> {{ umur }} tahun</p>
        <p><strong>Kategori:</strong> {{ kategori }}</p>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      nama: '',
      alamat: '',
      tanggalLahir: '',
      umur: null,
      kategori: null
    }
  },
  methods: {
    //tombol untuk hitung umur dan seleksi ktg
    //TBT = tgl bln tahun
    hitungUmur () {
      if (this.tanggalLahir) {
        const TbT = this.tanggalLahir.split('/')
        if (TbT.length === 3) {
          const tanggalLahir = new Date(`${TbT[2]}-${TbT[1]}-${TbT[0]}`)
          const sekarang = new Date()
          const selisihTahun = sekarang.getFullYear() - tanggalLahir.getFullYear()

          this.umur = selisihTahun

          if (selisihTahun >= 0 && selisihTahun <= 5) {
            this.kategori = 'Balita'
          } else if (selisihTahun > 5 && selisihTahun <= 10) {
            this.kategori = 'Anak-anak'
          } else if (selisihTahun > 10 && selisihTahun <= 17) {
            this.kategori = 'Remaja'
          } else {
            this.kategori = 'Dewasa'
          }

          // cek konsol
          console.log(`Nama: ${this.nama}`)
          console.log(`Alamat: ${this.alamat}`)
          console.log(`Tanggal Lahir: ${this.tanggalLahir}`)
          console.log(`Umur: ${this.umur} tahun`)
          console.log(`Kategori: ${this.kategori}`)
        } else {
          this.umur = null
          this.kategori = null
        }
      } else {
        this.umur = null
        this.kategori = null
      }
    }
  }
}
</script>
