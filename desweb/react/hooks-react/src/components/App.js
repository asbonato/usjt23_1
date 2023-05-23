import React from 'react'
import Accordion from './Accordion'
import Busca from './Busca'

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
    const expressaoJSX = <Busca />
    return (
        <div>
            {expressaoJSX}
        </div>
    )
}

export default App