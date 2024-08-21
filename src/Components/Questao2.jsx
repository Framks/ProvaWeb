import { useState } from "react";


// estamos utilizando o um hock do react para alterar o imagem na tela. utilizando o usestate
// cada vez que clicamos no butão fazermos a mudança no estado da variavel que esta guardando a url
// assim ele sera carregado novamente a cada alteração na variave ou click no butão
const Questao02 = () =>{
    const[lado, setLado] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png")
    const[contador, proximo]= useState(1)
    
    const handleLado = ()=>{
        proximo(contador+1)
        if(contador%2 === 0){
            setLado("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png")
        }else{
            setLado("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png")
        }
    }

    return(
        <>
            <h1>Questão 2</h1>
            <img src={lado} alt="pikachu imagem" />
            <button onClick={() => handleLado()}>
                Alterar Lado
            </button>
        </>
    )
}

export default Questao02;