import { useEffect, useState } from "react"

// utilizamos uma promessa para que em um determinado tempo
// se a resposta não for obitida nós possamos fazer uma rejeisão dela

const MinhaPromessa = new Promise(
    async (resolve, reject) => {
        try{
            const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");
            const json = await response.json()
            resolve(json)
        }catch(error){
            reject(error)
        }
    }
)

const Questao04 = () =>  {

    const[maior, setMaior] = useState({"capital":[""],"population":0});
    const[menor, setMenor] = useState({"capital":[""],"population":7999999999});

    const verificar = (cites) => {
        let maior = 0
        let menor = 99999999999
        let elemento
        cites.map(function(cite) {
            if(cite.population > maior){
                maior = cite.population
                elemento = cite
            }
        })
        setMaior(elemento)
        cites.map(function(cite) {
            if(cite.population < menor){
                menor = cite.population
                elemento = cite
            }
        })
        setMenor(elemento)
    }
    
    const buscarCidades = async () =>{
        MinhaPromessa.then((json) => { verificar(json)})
            .catch((error) => {console.log(error)})
    }
    
    useEffect(
        () => {
            buscarCidades()
        }
        ,
        []
    )

    return(
        <>
            <h1>Questão 04</h1>
            <h3>Maior: CAPITAL: {maior.capital}, POPULAÇÃO: {maior.population}</h3>
            <h3>Menor: CAPITAL: {menor.capital}, POPULAÇÃO: {menor.population}</h3>
        </>
    )
}
    
export default Questao04;