import React from "react"

const Accordion = ({itens}) => {
    return (
        <div>
            {
                itens.map((item, indice) => (
                    <div key={indice}>
                        <h4>{item.titulo}</h4>
                        <p>{item.conteudo}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Accordion