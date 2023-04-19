import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import EstacaoClimatica from "./EstacaoClimatica";

class App extends React.Component {
  icones = {
    Primavera: "fa-seedling",
    Verão: "fa-umbrella-beach",
    Outono: "fa-tree",
    Inverno: "fa-snowman",
  };



  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     latitude: null,
  //     longitude: null,
  //     estacao: null,
  //     data: null,
  //     icone: null,
  //     mensagemDeErro: null
  //   };
  //   console.log('construtor')
  // }

  state = {
    latitude: null,
    longitude: null,
    estacao: null,
    data: null,
    icone: null,
    mensagemDeErro: null
  }


  componentDidMount(){
    this.obterLocalizacao()
  }

  componentDidUpdate(){
    console.log("componentDidUpdate")
  }

  componentWillUnmount(){
    console.log("componentWillUnmount")
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
    window.navigator.geolocation.getCurrentPosition(
      (posicao) => {
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
      },
      (erro) => {
        console.log(erro)
        this.setState({mensagemDeErro: 'Tente novamente mais tarde'})
      }
    );
  };

  render() {
    console.log('render')
    return (
      //responsividade, margem acima
      <div className="container mt-2">
        {/**uma linha, conteúdo centralizado, display é flex */}
        <div className="row justify-content-center">
          {/**oito colunas das doze disponíveis serão usadas
              para telas médias em diante */}
          <div className="col-md-8">
            {/**um cartão Bootstrap */}
            <EstacaoClimatica 
              icone={this.state.icone}
              estacao={this.state.estacao}
              latitude={this.state.latitude}
              longitude={this.state.longitude}
              data={this.state.data}
              mensagemDeErro={this.state.mensagemDeErro}
              obterLocalizacao={this.obterLocalizacao}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
