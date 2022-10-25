import { useState } from "react";
import  {additem, deleteitem, edititem }  from "./todoAction"
import { useDispatch,useSelector } from "react-redux";

const Todo = () => {
    const [todos,setTodos] = useState("")
    console.log(todos,"initiaal value")

    const itemsList = useSelector((state) => state.list)
    console.log(itemsList)
    const words = JSON.stringify(itemsList)
    console.log(words)

    const dispatch = useDispatch()
  
    /* edit an item */
    const [editing,setEditing] = useState(null)  
    const [editingText,setEditingText] = useState("")
    console.log(editingText)
    return(
        <>
            <div>
                <h2>TODO USING REDUX</h2>
                <div>
                    <input type="text" placeholder="Add an item" value={todos} onChange={(e) => setTodos(e.target.value)} className="form-group" />
                    <button onClick={() => dispatch(additem(todos), setTodos(''))} className="btn btn-success" >Add</button>
                </div>
               
            </div>
            {
                itemsList.map((item) =>{
                    return(
                        <>
                            <div key={item.id}>
                                    {/* id value what we want to edit equal to editing() it display an input  or else it displays all the items */}
                                    {editing === item.id ? 
                                    ( <input type="text" onChange={(e) => setEditingText(e.target.value)} defaultValue={item.text} className="form-group  position" />) : 
                                    (<div className="space">{item.text}</div>
                                   ) }
                                    
                                    <button onClick={() => dispatch(deleteitem(item.id))} className="btn  position2 btn-primary ">Delete</button>
                                    {/* id value what we want to edit equal to editing() it dispalys to edit an item and click update button  */}
                                    { editing === item.id ? 
                                    ( <button onClick={() => { 
                                        dispatch(edititem(item.id, item.text = editingText));
                                         setEditing(null); 
                                         setEditingText("")} } className="btn position1 btn-warning">Update</button>) :
                                     (  <button onClick={() => setEditing(item.id)} className="btn btn-secondary space1">Edit</button>)}
                                </div>
                        </>
                    )
                })
            }
        </>
    )
}
export default Todo;