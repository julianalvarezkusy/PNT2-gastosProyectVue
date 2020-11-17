import Vue from "vue";
import Vuex from "vuex";
import gastos from "../store/gastos";
import ingresos from "../store/ingresos"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    gastos,
    ingresos
  },
});
