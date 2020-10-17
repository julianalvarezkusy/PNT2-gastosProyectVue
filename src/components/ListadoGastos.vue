<template>
  <div style="width:500px">
    <q-list bordered separator>

      <q-item clickable v-ripple v-for="gasto in gastos" :key="gasto.descripcion">
        <q-item-section>
          <q-item-label>{{ gasto.monto }} - {{ gasto.descripcion }}  </q-item-label>
          <!-- <q-item-label caption>{{ cpa.negocio.label  }}</q-item-label> -->
          <!-- <q-checkbox :value= cpa.comprado /> -->
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
  }}
};
</script>