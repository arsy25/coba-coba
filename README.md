# Quasar App (quasarlat)

A Quasar Project

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Lint the files
```bash
yarn lint
# or
npm run lint
```



### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js).

  <!--ini toolbarnya-->
      <div class="row q-pa-md flex flex-center">

        <div class="col flex flex-center">
        <q-btn rounded flat style="width: 200px" class="" label="Kalkulator"
          :to="{ path: '/kalkulator' }">
          <q-tooltip
            class="text-cyan-3 bg-black text-center"
            transition-show="rotate"
            style="width: 100px" transition-hide="rotate">
            Halaman Kalkulator
          </q-tooltip>
        </q-btn>
      </div>

        <div class="col flex flex-center">
          <q-btn rounded flat style="width: 200px" class="" label="Input Data"
            :to="{ path: '/input_biodata' }">
          <q-tooltip
            class="text-cyan-3 bg-black text-center"
            transition-show="rotate"
            style="width: 100px" transition-hide="rotate">
            Halaman Input Biodata
            </q-tooltip>
          </q-btn>
        </div>

      </div>


<!--kalkulator-->
<template>
  <q-page class="q-pa-md">
    <q-card class="q-pa-md">
      <q-card-section>
        <div class="text-center text-h4">Kalkulator</div>
        <div class="q-mb-md">
          <q-input rounded outlined v-model="expression" @input="clearResult" placeholder="yok itung disini"></q-input>
        </div>
        <div class="q-gutter-sm q-mt-sm">
          <q-btn color="primary" label="7" @click="Muncul('7')" />
          <q-btn color="primary" label="8" @click="Muncul('8')" />
          <q-btn color="primary" label="9" @click="Muncul('9')" />
          <q-btn color="primary" label="+" @click="Muncul('+')" />
        </div>
        <div class="q-gutter-sm q-mt-sm">
          <q-btn color="primary" label="4" @click="Muncul('4')" />
          <q-btn color="primary" label="5" @click="Muncul('5')" />
          <q-btn color="primary" label="6" @click="Muncul('6')" />
          <q-btn color="primary" label="-" @click="Muncul('-')" />
        </div>
        <div class="q-gutter-sm q-mt-sm">
          <q-btn color="primary" label="1" @click="Muncul('1')" />
          <q-btn color="primary" label="2" @click="Muncul('2')" />
          <q-btn color="primary" label="3" @click="Muncul('3')" />
          <q-btn color="primary" label="*" @click="Muncul('*')" />
        </div>
        <div class="q-gutter-sm q-mt-sm">
          <q-btn color="primary" label="0" @click="Muncul('0')" />
          <q-btn color="primary" label="C" @click="clearExpression" />
          <q-btn color="primary" label="=" @click="calculateResult" />
          <q-btn color="primary" label="/" @click="Muncul('/')" />
        </div>
      </q-card-section>
      <q-card-section>
        <q-input v-model="result" readonly placeholder="Hasil" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      expression: '',
      result: ''
    }
  },
  methods: {
    Muncul (value) {
      this.expression += value
    },
    clearExpression () {
      this.expression = ''
      this.result = ''
    },
    clearResult () {
      this.result = ''
    },
    calculateResult () {
      try {
        // eslint-disable-next-line no-eval
        const result = eval(this.expression)
        this.result = result.toString()
      } catch (error) {
        this.result = 'Error'
      }
    }
  }
}
</script>

<!--biodata-->
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
    hitungUmur () {
      if (this.tanggalLahir) {
        const dateParts = this.tanggalLahir.split('/')
        if (dateParts.length === 3) {
          const tanggalLahir = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`)
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

          // Menambahkan kode untuk mencetak ke console
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

