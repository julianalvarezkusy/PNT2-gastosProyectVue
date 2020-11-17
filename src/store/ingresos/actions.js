import * as types from "./types"

export default{
    [types.AGREGAR_INGRESO]: function({commit, state}, data){
        console.log(state)
        commit(types.AGREGAR_INGRESO, data)
    },
    [types.ELIMINAR_INGRESO]: function({commit, state}, data){
        console.log(state)
        commit(types.ELIMINAR_INGRESO,data)
    }
}