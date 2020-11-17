import * as types from "./types";

export default {
  [types.AGREGAR_GASTO]: function({ commit, state }, data) {
    console.log("ACCION" + state);
    commit(types.AGREGAR_GASTO, data);
  },

  [types.ELIMINAR_GASTO]: function({commit, state}, data){
    console.log(state)
    commit(types.ELIMINAR_GASTO, data)
  }

};
