import { useState } from "react";


const List = () => {
    const [todos,setTodos] = useState("");
    console.log(todos, "initial item")
    const [itemsList,setItemsList] = useState([]);

    function changeItems(e){
        console.log('change items')
        setTodos(e.target.value)
    }

    /* submit an item */
    const todo={
        id: Math.floor(Math.random() * 100),
        text: todos
    };
    function submitItems(e){
        e.preventDefault()

        console.log(todos)
        const allItems = [...itemsList].concat(todo)
        setItemsList(allItems)
        console.log(itemsList, todo, "add items")   
        console.log(allItems)
        setTodos("")
    }

    /* delete an item */
    function deleteitem(id){
        console.log(id,todo, "delete items")
        const deleteitem = [...itemsList].filter((list) => list.id !== id)
        setItemsList(deleteitem)
        console.log(deleteitem)
    }
     return(
        <>
            <div>
                <div>
                    <h2>TODO USING REACT</h2>
                    <form onSubmit={submitItems}>
                        <input type="text" placeholder="Add an item"  value={todos} onChange={changeItems} />
                        <button className="btn btn-success">ADD</button>
                    </form>
                    {
                        itemsList.map((list, i) => {                        
                        return(
                            <>
                                
                                    <div key={i}>
                                        {/* <div>id:{todo.id}</div>  */}
                                        <div  >{list.text}</div>
                                        <div><button onClick={() => deleteitem(list.id)} className="btn btn-primary">Del</button></div>
                                        {/*<div> <button onClick={() => edititem(list.id)} className="btn btn-secondary">Edit</button></div>  */}
                                    </div>
                                
                               
                            </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default List;