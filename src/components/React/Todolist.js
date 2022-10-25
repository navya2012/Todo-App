import { useState } from "react"
import React from "react"
import "../../App.css"

const Todolist = () => {
    const [todo, setTodo] = useState("")
    console.log(todo, "initial item")

    const [items, setItems] = useState([])

    /* id of the editing item */
    const [editing,setEditing] = useState(null)       /* not editing by these hooks so,we take it as null */
    
    /* text we are going to edit - editing text: edit before we are going to submit; seteditingtext: at time of submit button */
    const [editingText,setEditingText] = useState("")

    /* change item*/
    function handleChange(e) {
        setTodo(e.target.value)
        console.log(todo, "change items")
    }

    /* add an item */
    function handleSubmit(e) {
        e.preventDefault()

        const newTodo = {
            id: Math.floor(Math.random() * 100),
            text: todo,
        }
        console.log(newTodo)
        const allItems = [...items].concat(newTodo)
        setItems(allItems)
        setTodo("")
        console.log(items, newTodo);
        console.log(allItems)
    }

    /* delete an item */
    function deleteitem(id,) {
        console.log(id, "delete item")
        const delitem = [...items].filter((item) => item.id !== id)
        console.log( items, delitem)
        setItems(delitem)
    }

    /* edit an item **/
    function edititem(id){
        console.log(id,"edit item")
        const edititem = [...items].map((item) => {
            console.log(editingText, editing, item)
            if(item.id === id) {
                item.text = editingText
                console.log(editingText, item.text)
            }
            return item
        })
        console.log(edititem);
        setItems(edititem);
        setEditing(null);
        setEditingText("")
    }
    return (
        <>
            <div className="App">
                <h2>TODO USING REACT</h2>
                <form onSubmit={handleSubmit} >
                    <input type="text" value={todo} onChange={handleChange} className="form-group" />
                    <button type="submit" className="btn btn-success">ADD</button>
                </form>
                {
                    items.map((item) => {
                        return (
                            <>
                                <div key={item.id}>
                                    {/* id value what we want to edit equal to editing() it display an input  or else it displays all the items */}
                                    {editing === item.id ? 
                                    ( <input type="text" onChange={(e) => setEditingText(e.target.value)} defaultValue={item.text} className="form-group  position" />) : 
                                    (<div className="space">{item.text}</div>
                                   ) }
                                    
                                    <button onClick={() => deleteitem(item.id)} className="btn  position2 btn-primary ">Delete</button>
                                    {/* id value what we want to edit equal to editing() it dispalys to edit an item and click update button  */}
                                    { editing === item.id ? 
                                    ( <button onClick={() => edititem(item.id)} className="btn position1 btn-warning">Update</button>) :
                                     (  <button onClick={() => setEditing(item.id)} className="btn btn-secondary space1">Edit</button>)}
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Todolist;