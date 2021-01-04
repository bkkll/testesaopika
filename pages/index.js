import { useState } from "react";

function Home() {
    return (
        <div>
            <h1>Home 1</h1>
            <h2>Home 2</h2>
            <h3>Home 3</h3>
            <h4>Home 4</h4>
            <Contador />
        </div>
    )
}

function Contador() {
    const [contador,setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home