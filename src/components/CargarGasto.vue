<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onAgregar" @reset="onLimpiar" class="q-gutter-md">
            <q-select
        filled
        v-model="categoria"
        :options= "options"
        label="Categoria"
        hint="Categoria del Gasto"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Seleccione una categoria']"
      />
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
        type="text"
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
      monto: "",
      total: 0,
      categoria: null,
      options: ['Verduleria','Carniceria','Merceria']
    }
  },
  methods: {
    onAgregar: function (){
      let gasto = {
        categoria: this.categoria,
        descripcion: this.descripcion,
        monto: parseFloat(this.monto),
        creationStamp: new Date(),
        updateStamp: null

      }
      this.$store.dispatch('gastos/' + AGREGAR_GASTO, gasto)
      this.onLimpiar()
      window.confirm("Gasto agregado con éxito")
    },
    onLimpiar: function (){
      this.monto= "",
      this.descripcion=''
    }
  }
};
</script>
