import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
class App extends React.Component{

  constructor(props) {
    super(props)
      this.state = {
      latitude: null,
      longitude: null,
      estacao: null,
      data: null,
      icone: null
    }
  }

  render(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position)
    )
    return (
      <div>
        Meu app
      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.querySelector("#root")
)