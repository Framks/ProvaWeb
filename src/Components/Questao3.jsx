import { useEffect, useState } from "react"


// estamos utilizando o feth para fazer a requisiçao de buscar as capitais e as populações nelas
// utilizando uma função assincrona apos isso alteramos a variavel de estado para que guarde o 
// elemento que tem o maior e o menor numero de população e imprimimos na tela
const Questao03 = () =>  {

    const[maior, setMaior] = useState({"capital":[""],"population":0});
    const[menor, setMenor] = useState({"capital":[""],"population":7999999999});

    const verificar = (cites) => {
        let maior = 0
        let menor = 99999999999
        let elemento
        cites.map((cite)=> {
            if(cite.population > maior){
                maior = cite.population
                elemento = cite
            }
        })
        setMaior(elemento)
        cites.map((cite)=> {
            if(cite.population < menor){
                menor = cite.population
                elemento = cite
            }
        })
        setMenor(elemento)
    }
     
    const buscarCidades = async () =>{
        try{
            const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
            const va = await response.json()
            verificar(va)
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
            <h1>Questão 03</h1>
            <h3>Maior: CAPITAL: {maior.capital}, POPULAÇÃO: {maior.population}</h3>
            <h3>Menor: CAPITAL: {menor.capital}, POPULAÇÃO: {menor.population}</h3>
        </>
    )
}
    
export default Questao03;    