<template>
  <q-page >
          <q-tabs
        v-model="tab"
        
        class="text-teal"
      >
      <q-tab name="cargarIngreso" icon="add" label="Cargar Ingresos" />
        <q-tab name="cargarGasto" icon="monetization_on" label="Cargar Gastos" />
        <q-tab name="listarGasto" icon="list" label="Listar" />
        <q-tab name="indicadores" icon="bar_chart" label="Indicadores"/>

      </q-tabs>
      <div class="q-pa-md center">
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="cargarIngreso">
            <CargarIngreso />
          </q-tab-panel>
          <q-tab-panel name="cargarGasto">
            <CargarGasto/>
          </q-tab-panel>
          <q-tab-panel name="listarGasto">
            <q-splitter v-model="splitterModel">
              <template v-slot:before>
                <h4>Ingresos</h4>
                <ListadoIngresos/>

                <div></div>

                

              </template>

              <template v-slot:after>
                <h4>Gastos</h4>
                <ListadoGastos/>
                <div></div>

              </template>
            <hr/>
  
              

            </q-splitter>
            

          </q-tab-panel>
          <q-tab-panel name="indicadores">

             <TotalIngresos/>

             <Total/>
              <TotalConsolidado />



          </q-tab-panel>
        </q-tab-panels>
      </div>

    
  </q-page>
</template>

<script>
import CargarIngreso from "../components/CargarIngreso"
import CargarGasto from "../components/CargarGasto";
import ListadoGastos from "../components/ListadoGastos";
import ListadoIngresos from '../components/ListadoIngresos'
import Total from '../components/TotalCard'
import TotalIngresos from '../components/TotalCardIngresos'
import TotalConsolidado from '../components/TotalConsolidado'
export default {
  name: "PageIndex",
  components: { CargarIngreso, CargarGasto, ListadoGastos , ListadoIngresos, Total, TotalIngresos, TotalConsolidado},
  data(){
    return{
      tab:'tabs',
      splitterModel: 50
    }
  }
};
</script>
