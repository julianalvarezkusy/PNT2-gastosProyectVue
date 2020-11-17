<template>
  <q-page >
          <q-tabs
        v-model="tab"
        
        class="text-teal"
      >
        <q-tab name="cargarGasto" icon="monetization_on" label="Cargar Gasto" />
        <q-tab name="listarGasto" icon="list" label="Listar Gastos" />

      </q-tabs>
      <div class="q-pa-md center">
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="cargarGasto">
            <CargarGasto/>
          </q-tab-panel>
          <q-tab-panel name="listarGasto">
            <ListadoGastos/>
            <hr/>
            <Total/>

          </q-tab-panel>
        </q-tab-panels>
      </div>
    
  </q-page>
</template>

<script>
import CargarGasto from "../components/CargarGasto";
import ListadoGastos from "../components/ListadoGastos";
import Total from '../components/TotalCard'
export default {
  name: "PageIndex",
  components: { CargarGasto, ListadoGastos , Total},
  data(){
    return{
      tab:'tabs'
    }
  }
};
</script>
