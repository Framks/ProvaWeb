// Neste codigo esta sendo usado o props para fazer a passagem de uma vetor de objetos
// neste vetor de objetos que foi passado para Questao01B, estamos fazendo uma verificação de 
// qual das 3 propriedades são maiores. e retornando dentro de uma tag p o maior entre eles 
const Questao01A = () => {
    const lista = [
        {a:10, b:3, c: 7},
        {a:5, b:-3, c: 9},
        {a:1, b:9, c: 40}
    ]
    
    return(
        <>
            <h1>Questão 01</h1>
            <Questao01B lista={lista}/>
        </>
    )
}

function Questao01B({lista}){
    const calcularMaior = () =>{
        const resultado = lista.map(
            (linha) => {
                let v= 0
                if(linha.a > linha.b && linha.a > linha.c)
                    v = linha.a
                else if (linha.b > linha.a && linha.b > linha.c) {
                    v = linha.b
                } else if(linha.c > linha.a && linha.c > linha.b){
                    v = linha.c                    
                }
                return(
                    <p>Maior: {v}</p>
                )
            }
        )
        return resultado;
    }
    return(
        <div>
            {calcularMaior()}
        </div>
    )
}

export {Questao01A, Questao01B};