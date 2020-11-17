<template>
  <div style="width:500px">
  <q-card>
      <q-card-section class="text-h5">Balance</q-card-section>
      <q-card-section class="text-h5">{{total}}</q-card-section>
      <q-card-section side>
          <q-circular-progress
           :value="value"    
            size="100px"
            :color="color"
            class="q-ma-md" />
      </q-card-section>

  </q-card>
  </div>

</template>
<script>

export default {
  name: "TotalConsolidado",
  data(){
    return {
        // value : 50
    }
  },
  computed:{
    ingresos: function  (){

    return this.$store.state.gastos.gastos
  },
    total: function(){
        let ingresos = this.$store.state.ingresos.total

        let gastos = this.$store.state.gastos.total

        let total = ingresos - gastos




      return total

      // return this.$store.state.gastos.total
      
    },
    value: function(){
        let ingresos = this.$store.state.ingresos.total
        let gastos = this.$store.state.gastos.total

        let total = 0

        if(gastos < ingresos || ingresos != 0){
            total = (gastos/ingresos) * 100
        }

        return total

    },
    color: function (){
        let ingresos = this.$store.state.ingresos.total
        let gastos = this.$store.state.gastos.total

        let color = 'red'
        
        if(ingresos > gastos){
            color= 'green'
        }else if (ingresos == gastos){
            color = 'grey'
        }

        return color
        
    }
    },
  methods:{
   
  }
};
</script>