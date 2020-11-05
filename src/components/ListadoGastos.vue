<template>
  <div style="width:500px">
    <q-list bordered separator>

      <q-item clickable v-ripple v-for="gasto in gastos" :key="gasto.descripcion">
        <q-item-section v-on:click = "gasto.monto = gasto.monto +1">
          <q-item-label>{{ gasto.monto }}</q-item-label>
          <q-item-label caption>{{ gasto.descripcion }}  </q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-label>Total</q-item-label>
        <q-item-label  v-for="gasto in gastos" :key="gasto.descripcion">{{gasto.monto}}</q-item-label>
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