import { useState } from "react"

function Form(){
    const [pedido, setPedido] = useState('')
    function laValidacion(event) {
        event.preventDefault()
        if (pedido !== '') {
            console.log('todo bien');
        } else {
            console.log('todo mal');
        }
    }

    console.log(pedido);

    return(
        <form onSubmit={laValidacion}>
            <label htmlFor= "pedido">Pedido</label>
            <input type="text" id="pedido" value={pedido} onChange={(e) => setPedido(e.target.value)}></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form