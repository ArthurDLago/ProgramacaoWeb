function Bode(props) {
    return (
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae a eum doloribus aspernatur, modi, obcaecati est voluptas recusandae mollitia quos rem eveniet, architecto aperiam cum. Eligendi ut quidem mollitia corrupti?</p>
            <p>Gosto de suco de {props.texto}</p>
            <button onClick={() => props.mensagemAlerta("é bom demaise")}>Mensagem</button>

            {props.lista.map((linha) => (
                <li key={linha}>{linha}</li>
            ))}

            <h2>Valores recebidos {JSON.stringify(props)}</h2>
        </div>
    )
}
export default Bode;