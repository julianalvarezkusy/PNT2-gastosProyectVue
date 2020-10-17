<template>
  <q-page class="flex flex-center">

               <CargarGasto />
           <ListadoGastos />
  </q-page>
</template>

<script>
import CargarGasto from "../components/CargarGasto";
import ListadoGastos from "../components/ListadoGastos";
export default {
  name: "PageIndex",
  components: { CargarGasto, ListadoGastos },
};
</script>
