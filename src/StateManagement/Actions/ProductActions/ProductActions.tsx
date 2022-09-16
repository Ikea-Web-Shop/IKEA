
import {ProductAdd,
ProductEdit,
ProductGetAll,
ProductGetById,
ProductRemove
} from "../ActionTypes/ProductTypes/ProductTypes"
export const getAll=()=>({
    type:ProductGetAll,
})

export const getById=id=>({
    type:ProductGetById,
    payload:id
})

export const Add=item=>({
    type:ProductAdd,
    payload:item
})

export const remove = id =>({
    type:ProductRemove,
    payload:id
})
export const edit = item=>({
    type:ProductEdit,
    payload:item
})