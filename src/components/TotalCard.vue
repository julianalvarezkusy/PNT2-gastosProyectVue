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
    console.log(this.$store.state.gastos.gastos)
    return this.$store.state.gastos.gastos
  },
    total: function(){
      console.log(this.$store.state.gastos.total)
      return this.$store.state.gastos.total
      
    }},
  methods:{
   
  }
};
</script>