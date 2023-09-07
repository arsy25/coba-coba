<template>
  <q-layout>
    <q-card class="bg-primary">
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
