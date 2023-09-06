<template>
  <q-layout>
    <q-card class="bg-black">

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
<q-page-container>
  <RouterView />
</q-page-container>
    </q-card>
  </q-layout>
</template>

<style>
:root {
  --transition-speed: 1000ms;
}

.btn {
  border-radius: 20px 5px;
  background: transparent;
  transition: var(--transition-speed);
}

.btn:hover {
  filter: grayscale(0%) opacity(1);
  font-weight: 600;
  background: #91c8e4;
  color: #191825;
}
</style>
