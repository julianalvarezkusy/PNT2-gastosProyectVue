<template>
  <q-layout>
    <CargarGasto />

  </q-layout>
</template>

<script>
import CargarGasto from "../components/CargarGasto";
// import ListadoGastos from "../components/ListadoGastos";
export default {
  name: "PageIndex",
  components: { CargarGasto },
};
</script>
