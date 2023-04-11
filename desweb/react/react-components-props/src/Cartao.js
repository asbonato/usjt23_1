import React from "react"

const Cartao = (props) => {
    return(
        <div className="card">
        {/** cabeçalho do cartão */}
        <div className="card-header text-muted">
            {props.cabecalho}
        </div>
        {/** corpo do cartão */}
        <div className="card-body">
            {props.children}
        </div>
        </div>
    )
}

export default Cartao