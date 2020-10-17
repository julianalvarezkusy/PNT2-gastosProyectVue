import * as types from "./types";

export default {
  [types.AGREGAR_GASTO]: function({ commit, state }, data) {
    console.log(state);
    commit(types.AGREGAR_GASTO, data);
  },
};
