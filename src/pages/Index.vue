<template>
  <q-page class="flex flex-center">
    <q-splitter v-model="splitterModel" style="height: 450px">
      <template v-slot:before>
        <q-tabs v-model="tab" vertical class="text-teal">
          <q-tab
            name="addshoppingcart"
            icon="add_shopping_cart"
            label="Cargar Compra"
          />
          <q-tab
            name="shoppingcart"
            icon="shopping_cart"
            label="Lista de Compras"
          />
        </q-tabs>
      </template>
      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="addshoppingcart"> <CargarGasto /> </q-tab-panel>
          <q-tab-panel name="shoppingcart"> <ListadoGastos /> </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </q-page>
</template>

<script>
import CargarGasto from "../components/CargarGasto";
import ListadoGastos from "../components/ListadoGastos";
export default {
  name: "PageIndex",
  components: { CargarPedido, ListarCompra },
  data() {
    return { tab: "addshoppingcart", splitterModel: 20 };
  },
};
</script>
