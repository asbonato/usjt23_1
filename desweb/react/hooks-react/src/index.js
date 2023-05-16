import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'primereact/resources/themes/bootstrap4-light-purple/theme.css'

ReactDom.render(
    <App />,
    document.querySelector('#root')
)
