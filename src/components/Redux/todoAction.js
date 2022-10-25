


export const additem = (text) => {
    return{
        type: "ADD_ITEM",
        payload:{
            id: Math.floor(Math.random() * 100),
            data: text
        }
    }
}

export const deleteitem = (id) => {
    return{
        type: "DELETE_ITEM",
        id
    }
}

 export const edititem = (  id, text) => {
    console.log(id, text)
    return{
        type: "EDIT_ITEM",
        payload: {
            id,
           text
            }         
    }
}

