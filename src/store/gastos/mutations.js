import * as types from "./types";

export default {
  [types.AGREGAR_GASTO]: function(state, data) {
    state.gastos.push(data);
    state.total = state.total + data.monto

  },

  [types.ELIMINAR_GASTO]: function(state, data){

    let index = state.gastos.indexOf(data)

    if(index != -1){
      state.gastos.splice(index,1)
      state.total = state.total - data.monto
      

    }else{
      console.log("ERROR: el elemento no existe")
    }
    
  }
};
