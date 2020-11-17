<template>
  <div style="width:500px">
    <q-list bordered separator>

      <q-item clickable v-ripple v-for="gasto in gastos" :key="gasto.descripcion">
        <q-item-section v-on:click = "prompt">
          <q-item-label>{{ gasto.categoria }}</q-item-label>
          <q-item-label>{{ gasto.monto }}</q-item-label>
          <q-item-label caption>{{ gasto.descripcion }}  </q-item-label>
        </q-item-section>
      </q-item>


    </q-list>
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
    prompt: function(){
      this.$q.dialog({
        title: "Modificar",
        message: "Modificar",
        prompt:{
          model:'',
          type: 'text'
        }
      }).onOK(()=>{
        this.$q.dialog({
          title: 'otr',
          message: 'otro',
          prompt
        })

      }).onCancel(()=>{

      }).onDismiss(()=>{

      })
    }
  }
};
</script>