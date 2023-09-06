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
