<template>
  <q-layout view="lHh Lpr lFf">

    <q-page-container>
              <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Listado de Compras
        </q-toolbar-title>
        <div>Compra Facil v0.01</div>
      </q-toolbar>
    </q-header>

      <BarComponent />
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import BarComponent from '../components/BarComponent'
export default {
  name: "MainLayout",
  components: {BarComponent},
};
</script>
