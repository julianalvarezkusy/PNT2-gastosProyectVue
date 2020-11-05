import * as types from "./types";

export default {
  [types.AGREGAR_GASTO]: function(state, data) {
    state.gastos.push(data);
    console.log(data);
  },
};
