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
        <>
            {calcularMaior()}
        </>
    )
}

export {Questao01A, Questao01B};