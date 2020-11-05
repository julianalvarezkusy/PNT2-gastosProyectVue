<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onAgregar" @reset="onLimpiar" class="q-gutter-md">
      <q-input
        filled
        v-model="descripcion"
        label="Descripción"
        hint="Descripción del gasto"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Ingrese la descripción']"
      />
      <q-input
        filled
        type="number"
        v-model="monto"
        label="Monto"
        lazy-rules
        :rules="[(val) => (val !== null && val !== '') || 'Ingrese monto']"
      />

      <div>
        <q-btn label="Guardar" type="submit" color="primary" />
        <q-btn
          label="Reiniciar"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<style></style>

<script>
import {AGREGAR_GASTO} from '../store/gastos/types'
export default {
  name: "CargarGasto",
  data(){
    return {
      descripcion: null,
      monto: 0,
      total: 0
    }
  },
  methods: {
    onAgregar: function (){
      let gasto = {
        descripcion: this.descripcion,
        monto: parseInt(this.monto),
        total: this.total
      }
      this.$store.dispatch('gastos/' + AGREGAR_GASTO, gasto)
    },
    onLimpiar: function (){
      this.monto= 0,
      this.descripcion=''
    }
  }
};
</script>
