<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="name"
        label="Descripción"
        hint="Descripción del gasto"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Ingrese la descripción']"
      />
      <q-input
        filled
        type="number"
        v-model="age"
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
export default {
  name: "CargarGasto",
};
</script>
