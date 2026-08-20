import { useParams } from "react-router";

const Rotas = () => {
    const {id} = useParams();

    return(
        <>
            <h1>Claudio</h1>
            {id && 
            <h1>ID recebido: {id}</h1>

            }
        </>
    )
}
export default Rotas;