import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Pedido from './Pedido'
import Cartao from './Cartao'
import Feedback from './Feedback'

const App = () => {
  const textoOK = "Pedido Entregue"
  const textoNOK = "Pedido Atrasado"
  const funcaoOK = () => alert("Agradecemos a sua resposta")
  const funcaoNOK = () => alert("Vamos verificar!")
  const componentFeedback = <Feedback textoOK={textoOK} funcaoOK={funcaoOK} textoNOK = {textoNOK} funcaoNOK={funcaoNOK}/>
  return (
    <div className="container border rounded mt-2">
      <div className="row">
        <div className="col-12">
          <h1 className="display-5 text-center">Seus pedidos</h1>
        </div>
      </div>
      <div className="row">
        {/* mobile first */}
        {/* .col-12.col-lg-6.col-xl-4 */}
        <div className="col-12 col-lg-6 col-xxl-4 my-2">
          {/* .card>.card-header.text-muted{22/04/2022} */}
          <Cartao cabecalho="22/04/2021">
            <Pedido icone="fa-solid fa-shake fa-hard-drive fa-2x"
              titulo="SSD" descricao="SSD Kingston A400 - SATA"/>
              {componentFeedback}
          </Cartao>
        </div>
        <div className="col-12 col-lg-6 col-xxl-4 my-2">
          <Cartao cabecalho="23/03/2023">
            <Pedido icone="fa-solid fa-shake fa-book fa-2x" 
              titulo="Livro" descricao="Concrete Mathematics - Donald Knuth"/>
              {componentFeedback}
            </Cartao>
        </div>
        <div className="col-12 col-lg-6 col-xxl-4 my-2">
          <Cartao cabecalho="12/02/2022">
            <Pedido icone="fa-solid fa-shake fa-laptop fa-2x"
              titulo="Notebook" descricao="Notebook Dell - 8GB - i5"/>
              {componentFeedback}
          </Cartao>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)