import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  icones = {
    Primavera: "fa-seedling",
    Verão: "fa-umbrella-beach",
    Outono: "fa-tree",
    Inverno: "fa-snowman",
  };

  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      estacao: null,
      data: null,
      icone: null,
    };
  }

  obterEstacao = (data, latitude) => {
    const anoAtual = data.getFullYear();
    //new Date(ano, mês(0 a 11), dia(1 a 31))
    //21/06 - Verão(N), Inverno(S)
    const d1 = new Date(anoAtual, 5, 21);
    //24/09 - Outono(N), Primavera(S)
    const d2 = new Date(anoAtual, 8, 24);
    //22/12 - Inverno(N), Verão(S)
    const d3 = new Date(anoAtual, 11, 22);
    //21/03 - Primavera(N), Outono(S)
    const d4 = new Date(anoAtual, 2, 21);
    //negativo é Sul, 0 ou positivo é Norte
    const sul = latitude < 0;

    if (data >= d1 && data < d2) return sul ? "Inverno" : "Verão";

    if (data >= d2 && data < d3) return sul ? "Primavera" : "Outono";

    if (data >= d3 && data < d4) return sul ? "Verão" : "Inverno";

    return sul ? "Outono" : "Primavera";
  };

  obterLocalizacao = () => {
    window.navigator.geolocation.getCurrentPosition((posicao) => {
      let data = new Date();
      let estacao = this.obterEstacao(data, posicao.coords.latitude);
      let icone = this.icones[estacao];
      console.log(icone);
      this.setState({
        latitude: posicao.coords.latitude,
        longitude: posicao.coords.longitude,
        estacao: estacao,
        data: data.toLocaleTimeString(),
        icone: icone,
      });
    });
  };

  render() {
    return (
      //responsividade, margem acima
      <div className="container mt-2">
        {/**uma linha, conteúdo centralizado, display é flex */}
        <div className="row justify-content-center">
          {/**oito colunas das doze disponíveis serão usadas
              para telas médias em diante */}
          <div className="col-md-8">
            {/**um cartão Bootstrap */}
            <div className="card">
              {/** o corpo do cartão */}
              <div className="card-body">
                {/** centraliza verticalmente, margem abaixo */}
                <div
                  className="d-flex align-items-center border rounded mb-2"
                  style={{ height: "6rem" }}
                >
                  {/**ícone obtido do estado do componente */}
                  <i className={`fas fa-5x ${this.state.icone}`}></i>
                  {/** largura 75%, margem à esquerda (start), fs aumenta a fonte */}
                  <p className="w-75 ms-3 text-center fs-1">
                    {this.state.estacao}
                  </p>
                </div>
                <div className="text-center">
                  {/** renderização condicional */}
                  {
                    this.state.latitude?
                    `Coordenadas:${this.state.latitude}, ${this.state.longitude}. Data: ${this.state.data}`
                    :
                    'Clique no botão para saber a sua estação climática'
                  }
                </div>
                {/** botão azul (outline 100% de largura e margem acima) */}
                <button onClick={this.obterLocalizacao}
                  className="btn btn-outline-primary w-100 mt-2">
                  Qual a minha estação?  
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
