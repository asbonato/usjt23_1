import React from 'react'
import Accordion from './Accordion'

const itens = [
    {
        titulo: "Java",
        conteudo: "Linguagem compilada e interpretada."
    },
    {
        titulo: "Python",
        conteudo: "Linguagem interpretada e dinamicamente tipada."
    },
    {
        titulo: "JavaScript",
        conteudo: "Interpretada. Executa do lado cliente e do lado servidor também."
    }
]


const App = () => {
    return (
        <div>
            <Accordion itens={itens}/>
        </div>
    )
}

export default App