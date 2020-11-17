<template>
<div>
  <div style="width:500px">
    <q-list bordered separator>

      <q-item v-ripple v-for="ingreso in ingresos" :key="ingreso.descripcion">
        <q-item-section>
          <q-item-label>{{ ingreso.categoria }}</q-item-label>
          <q-item-label>{{ ingreso.monto }}</q-item-label>
          <q-item-label caption>{{ ingreso.descripcion }}  </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="edit" v-on:click="editar(ingreso)"></q-icon>
        </q-item-section>
        <q-item-section clickable v-ripple side >
          
          <q-icon name="backspace" v-on:click = "remover(ingreso)"></q-icon></q-item-section>
      </q-item>
      <q-item>
        <q-item-label>Total</q-item-label>
        <q-item-label side>{{total}}</q-item-label>
        

      </q-item>


    </q-list>


  </div>

</div>
</template>
<script>

import {ELIMINAR_INGRESO} from '../store/ingresos/types'
export default {
  name: "ListadoIngresos",
  data(){
    return {

    }
  },
  computed:{
    ingresos: function  (){

    return this.$store.state.ingresos.ingresos
  },
    total: function(){

      return this.$store.state.ingresos.total
      
    }},
  methods:{
    remover: function(ingreso){

      this.$store.dispatch('ingresos/' + ELIMINAR_INGRESO, ingreso)
    },
    editar: function(ingreso){
      let oldIngreso = ingreso.monto
      ingreso.monto = prompt("Ingrese nuevo monto")
      this.$store.state.ingresos.total -= oldIngreso
      this.$store.state.ingresos.total += parseFloat(ingreso.monto)
      ingreso.updateStamp = new Date()
    },
    prompt: function(){

    }
  }
};
</script>