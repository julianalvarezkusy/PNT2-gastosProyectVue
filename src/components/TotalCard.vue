<template>
  <div style="width:500px">
  <q-card>
      <q-card-section class="text-h4">Total</q-card-section>
      <q-card-section class="text-h3">{{total}}</q-card-section>

  </q-card>
  </div>

</template>
<script>

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
   
  }
};
</script>