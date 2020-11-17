import * as types from "./types";

export default {
  [types.AGREGAR_GASTO]: function(state, data) {
    state.gastos.push(data);
    state.total = state.total + data.monto
    console.log("MUTACION: " + data.total);
    console.log("MUTACION - STATE: "+state.total)
  },
  // [types.ELIMINAR_GASTO]: function(state, data){
  //   state.total = total + data
  // }
};
