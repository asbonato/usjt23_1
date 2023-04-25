import React, {Component} from 'react'

export default class Loading extends Component {
    render(){
        return (
            //centralizando nos dois eixos, borda e padding
            <div className='d-flex justify-content-center align-items-center border rounded p-3'>
            {/** text-whatever troca de cor */}
                <div className='spinner-border text-primary' 
                    style={{width:'3rem', height:'3rem'}}>
                        {/** deve ser utilizado somente por disposivos de acessibilidade, 
                            como leitores de tela */}
                    <span className='visually-hidden'>Carregando...</span>
                </div>
                <p className='text-primary'>{this.props.mensagem}</p>
            </div>
        )
    }
}

//fora da classe que define o componente
Loading.defaultProps = {
    mensagem: "Carregando"
}