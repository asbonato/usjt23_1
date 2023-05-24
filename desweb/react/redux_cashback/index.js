const Redux = require ('redux')
//essa primeira função é uma criadora de ação
//ela vai criar um contrato
const criarContrato = (nome, taxa) => {
  return {
    type: 'CRIAR_CONTRATO',
    payload: { nome, taxa }
  }
}

//função criadora de ação
//ela deve criar uma ação de cancelamento de contrato
//para tal, ela só precisa saber o nome do cliente
function cancelarContrato (nome){
  return {
    type: 'CANCELAR_CONTRATO',
    payload: { nome }
  }
}

//função criadora de ação para solicitações de cashback
const solicitarCashback = (nome, valor) => {
  return {
    type: 'SOLICITAR_CASHBACK',
    payload: { nome, valor }
  }
}

//reducer que manipula essa fatia (slice) de estado
//[{nome: Maria, valor: 20}, {nome: Joao, valor: 100 }]
const historicoDePedidosDeCashback = (historicoDePedidosDeCashbackAtual = [], acao) => {
  if (acao.type === 'SOLICITAR_CASHBACK')
    return [
      ...historicoDePedidosDeCashbackAtual,
      acao.payload
    ]
  return historicoDePedidosDeCashbackAtual
}
const caixa = (dinheiroEmCaixa = 0, acao) => {
  if (acao.type === 'SOLICITAR_CASHBACK')
    dinheiroEmCaixa -= acao.payload.valor
  else if (acao.type === 'CRIAR_CONTRATO')
    dinheiroEmCaixa += acao.payload.taxa  
  return dinheiroEmCaixa
}

const contratos = (listaDeContratosAtual = [], acao) => {
  if (acao.type === 'CRIAR_CONTRATO')
    return [...listaDeContratosAtual, acao.payload]
  if (acao.type === 'CANCELAR_CONTRATO')
    return listaDeContratosAtual.filter(contrato => contrato.nome !== acao.payload.nome)
  return listaDeContratosAtual  
}

const { createStore, combineReducers } = Redux

const todosOsReducers = combineReducers({
  historicoDePedidosDeCashback,
  caixa,
  contratos
})

const store = createStore(todosOsReducers)
//exibindo o estado
console.log(store.getState())
const acaoContratoJose = criarContrato('José', 50)
store.dispatch(acaoContratoJose)
console.log(store.getState())
const acaoContratoMaria = criarContrato('Maria', 50)
store.dispatch(acaoContratoMaria)
console.log(store.getState())

//solicitar cashback de 10 para a Maria
//solicitar cashback de 20 para o José
//cancelar o contrato da Maria
