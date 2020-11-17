<template>
  <div style="width:500px">
  <q-card>
      <q-card-section class="text-h6">Total Ingresos</q-card-section>
      <q-card-section class="text-h5">{{total}}</q-card-section>

  </q-card>
  </div>

</template>
<script>

export default {
  name: "TotalCardIngresos",
  data(){
    return {

    }
  },
  computed:{
    gastos: function  (){

    return this.$store.state.ingresos.ingresos
  },
    total: function(){

      return this.$store.state.ingresos.total
      
    }},
  methods:{
   
  }
};
</script>