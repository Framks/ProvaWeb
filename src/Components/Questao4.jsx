import { useEffect, useState } from "react"

// utilizamos uma promessa para que em um determinado tempo
// se a resposta não for obitida nós possamos fazer uma rejeisão dela

const MinhaPromessa = new Promise(
    (resolve, reject) => {
        // computção de x segundos .. 
        // tem x segundo para executar
        setTimeout(()=>{
            const response = fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
            const json = response.json()
            console.log(json)
        }, 4000
           )
    }
)

const Questao04 = () =>  {

    const[maior, setMaior] = useState({"capital":[""],"population":0});
    const[menor, setMenor] = useState({"capital":[""],"population":7999999999});

    const setarDados = (elemento) => {
        if(elemento.population > maior.population){
            setMaior(elemento)
        } else if((elemento.population) < menor.population){
            setMenor(elemento)
        }
    }
    
    const buscarCidades = async () =>{
        try{
            const json = await MinhaPromessa
            json.map(setarDados)
        }catch (error){ 
            console.log(error)
        }
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