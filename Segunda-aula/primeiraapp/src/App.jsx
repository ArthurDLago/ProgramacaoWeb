import { useState } from "react";
import Bode from "./bode";
import Titulo from "./titulo"
import Exibir from "./Exibir";
import Calculadora from "./Calculadora";

function App() {
const [contador, setContador] = useState(0)

  const mensagemAlerta = (mensagem) =>{
    alert(mensagem)
  }

const listaArray = ["Suco de acerola", "Suco de tamarindo", "Suco de limão"]

  return (
    <div>
      <Exibir/>
      <h1>Contador: {contador}</h1>
      <br/>
      <button onClick={()=>setContador(contador + 1)}>Incrementa</button>
      <button onClick={()=>setContador(contador - 1)}>Decrementa</button>
      <Titulo texto = "Jabuticaba e abaxaxi"/>
      <Bode texto = "Abacaxi com Hortelá" mensagemAlerta={mensagemAlerta} lista={listaArray}/>
      <h1>---------------------------------------------------------------------------------------------------------------------------------------------------</h1>
      <h1>Calculadora</h1>
      <Calculadora/>
    </div>
  )
  
}

export default App;