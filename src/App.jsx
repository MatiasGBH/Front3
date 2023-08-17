import { useState } from 'react'
import './App.css'
import Form from './Componentes/Form'
import Pedido from './Componentes/Pedido'


function App() {
  const[elPedido, setElPedido] = useState();


  function handleSubmit(pedido){
    setElPedido(pedido);
  }
  

  return (
    <>
  <Form onPedido={handleSubmit}/>

  {elPedido ? <Pedido>{elPedido}</Pedido> : "Ingresa tu pedido"  }

  

    </>
  )
}

export default App