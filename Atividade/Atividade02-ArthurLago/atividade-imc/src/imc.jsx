import { useState } from "react";

function IMC() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setImc] = useState(0);
    const [classificacao, setClassificacao] = useState("");

    function calcularIMC() {
        let resultado = Number(peso) / (Number(altura) * Number(altura));

        setImc(resultado.toFixed(2));

        if (resultado < 18.5) {
            setClassificacao("MAGREZA");
        }
        else if (resultado < 25) {
            setClassificacao("NORMAL");
        }
        else if (resultado < 30) {
            setClassificacao("SOBREPESO");
        }
        else if (resultado < 40) {
            setClassificacao("OBESIDADE");
        }
        else {
            setClassificacao("OBESIDADE GRAVE");
        }
    }

    return (
        <>
            <h1>Calculadora de IMC</h1>

            <label>Peso em KG: </label>
            <input
                type="text"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
            />

            <br />
            <br />

            <label>Altura em metros: </label>
            <input
                type="text"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
            />

            <br />
            <br />

            <button onClick={calcularIMC}>Calcular IMC</button>

            <h2>IMC: {imc}</h2>

            <h2
                style={
                    classificacao === "SOBREPESO" ||
                    classificacao === "OBESIDADE" ||
                    classificacao === "OBESIDADE GRAVE"
                        ? { color: "red" }
                        : { color: "black" }
                }
            >
                Classificação: {classificacao}
            </h2>
        </>
    );
}

export default IMC;