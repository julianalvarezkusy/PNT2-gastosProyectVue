import * as types from "./types"

export default{
    [types.AGREGAR_INGRESO]: function(state, data){
        state.ingresos.push(data)
        state.total += data.monto
        
        console.log('AGREGAR INGRESO')
    },
    [types.ELIMINAR_INGRESO]: function(state, data){
        console.log(state)
        console.log(data)
        console.log('ELIMINAR INGRESO')
        let index = state.ingresos.indexOf(data)

        if(index != -1){
            state.ingresos.splice(index, 1)
            state.total = state.total - data.monto
        }
    }
}