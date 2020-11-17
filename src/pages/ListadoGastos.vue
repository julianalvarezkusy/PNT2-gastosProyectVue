<template>
  <q-layout>
    <ListadoGastos />

    <Total/>


  </q-layout>
</template>

<script>
// import CargarGasto from "../components/CargarGasto";
import ListadoGastos from "../components/ListadoGastos";
import Total from '../components/TotalCard'
export default {
  name: "ListadoGastos",
  components: { ListadoGastos , Total},
};
</script>