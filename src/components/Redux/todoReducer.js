
const initialState = {
    list : [],
}

const todoReducer = (state=initialState, action) => {
    console.log(state, action)
    switch(action.type){
        case 'ADD_ITEM':
           //const { id, data} = action.payload
            console.log(state)
            return{
                ...state,
                list:[
                    ...state.list,
                {
                    id:action.payload.id,
                    text: action.payload.data
                }
            ]
            }
        case 'DELETE_ITEM':
            console.log(action.id,state.list," delete items")
            return{
                ...state,
                list: state.list.filter((item) => item.id !== action.id)
            }
        case 'EDIT_ITEM':
            console.log( action.payload.id, action.payload.text, "edit items")
           const newState = {...state}
            const edititem = newState.list.map((item) => {
                if(item.id === action.payload.id) {
                    item.text = action.payload.text
                }
                return item
            })
            return{
                ...state,
                list: edititem
            }           
        default:
            return state;
    }
}
export default todoReducer;