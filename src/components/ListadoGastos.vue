<template>
  <div style="width:500px">
    <q-list bordered separator>

      <q-item v-ripple v-for="gasto in gastos" :key="gasto.descripcion">
        <q-item-section>
          <q-item-label>{{ gasto.categoria }}</q-item-label>
          <q-item-label>{{ gasto.monto }}</q-item-label>
          <q-item-label caption>{{ gasto.descripcion }}  </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="edit" v-on:click="editar(gasto)"></q-icon>
        </q-item-section>
        <q-item-section clickable v-ripple side >
          
          <q-icon name="backspace" v-on:click = "remover(gasto)"></q-icon></q-item-section>
      </q-item>


    </q-list>
  </div>

</template>
<script>

import {ELIMINAR_GASTO} from '../store/gastos/types'
export default {
  name: "ListadoGastos",
  data(){
    return {

    }
  },
  computed:{
    gastos: function  (){

    return this.$store.state.gastos.gastos
  },
    total: function(){

      return this.$store.state.gastos.total
      
    }},
  methods:{
    remover: function(gasto){

      this.$store.dispatch('gastos/' + ELIMINAR_GASTO, gasto)
    },
    editar: function(gasto){
      let oldGasto = gasto.monto
      gasto.monto = prompt("Ingrese nuevo monto")
      this.$store.state.gastos.total -= oldGasto
      this.$store.state.gastos.total += parseFloat(gasto.monto)
      gasto.updateStamp = new Date()
      console.log('Estás editando')
      console.log(this.gastos)
    },
    prompt: function(){

    }
  }
};
</script>