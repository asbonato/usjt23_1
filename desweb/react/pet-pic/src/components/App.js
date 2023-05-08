import React from 'react'
import Busca from './Busca'
import env from 'react-dotenv'
import { createClient } from 'pexels'
export default class App extends React.Component {

  pexelsClient = null

  componentDidMount(){
    this.pexelsClient = createClient(env.PEXELS_KEY)
  }

  onBuscaRealizada = (termo) => {
    this.pexelsClient.photos.search({
      query: termo,
      per_page: 2
    })
    .then(pics => console.log(pics))
  }
  render(){
    return (
      <div>
        <h1>
          Exibir uma lista de...
        </h1>
        <Busca onBuscaRealizada={this.onBuscaRealizada}/>
      </div>
    )
  }
}