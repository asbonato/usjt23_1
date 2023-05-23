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