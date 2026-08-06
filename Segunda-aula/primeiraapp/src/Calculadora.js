import { useState } from "react"
import Resultado from "./Resultado";

function Calculadora() {
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [resultado, setResultado] = useState(0);

    function somarValores(numero1, numero2) {
        setResultado (Number(numero1) + Number(numero2));
    }

    function subtrairValores(numero1, numero2) {
        setResultado (Number(numero1) - Number(numero2));
    }

    function multValores(numero1, numero2) {
        setResultado (Number(numero1) * Number(numero2));
    }

    function divValores(numero1, numero2) {
        setResultado (Number(numero1) / Number(numero2));
    }

    return (
        <>
            <label>Valor 1: </label>
            <input value={numero1} type="text" onChange={(e) => setNumero1(e.target.value)}></input><br></br><br></br>
            <label>Valor 2: </label>
            <input value={numero2} type="text" onChange={(e) => setNumero2(e.target.value)}></input><br></br><br></br>
            <button onClick={() => somarValores(numero1, numero2)}>+</button>
            <button onClick={() => subtrairValores(numero1, numero2)}>-</button>
            <button onClick={() => multValores(numero1, numero2)}>x</button>
            <button onClick={() => divValores(numero1, numero2)}>/</button>
            <Resultado resultado={resultado}/>
            <p>Numero 1: {numero1}</p>
            <p>Numero 2: {numero2}</p>
        </>
    )
}

export default Calculadora; 