import { useState } from "react"

function Form(){
    const [pedido, setPedido] = useState('')
    const [lista, setLista] = useState('')
    const [mostrarDatos, setMostrarDatos] = useState(false)
    const [errorPedido, setErrorPedido] = useState('')
    const [errorLista, setErrorLista] = useState('')

    const cambioPedido = (event) =>{
        const value = event.target.value;
        setPedido(value);
        setErrorPedido(value.length >= 3 ? '' : 'Pedido debe ser al menos de 3 caracteres')
    }
    const cambioLista = (event) =>{
        const value = event.target.value;
        setLista(value);
        setErrorLista(value.length >= 6 ? '' : 'Pedido debe ser al menos de 6 caracteres')
    }
    const envioDeDatos = (event) =>{
        event.preventDefault();
        if (pedido.length >=3 && lista.length >=6) {
            setMostrarDatos(true);
        }    
    }

    return(
        <div>
        <form onSubmit={laValidacion}>
            <label htmlFor= "pedido">Pedido</label>
            <input type="text" id="pedido" value={pedido} onChange={(e) => setPedido(e.target.value)}></input>
            <label htmlFor= "lista">Lista</label>
            <input type="text" id="lista" value={lista} onChange={(e) => setLista(e.target.value)}></input>
            <button type="submit">Enviar</button>
        </form>
        {mostrarDatos && <DatosComponent pedido={pedido} lista={lista} />}
        </div>
    )
}

export default Form