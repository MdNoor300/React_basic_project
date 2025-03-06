import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank'
    },
    children:'Click me to visit Google'
}

function My(){
    return (
        <h1>Hello bro</h1>
    )
}

const AnotherElement = (
    <a href="https://www.google.com" target="_blank">visit Google</a>
)

const Areact = React.createElement(
    'a',
    {
        href:'https://www.google.com',
        target:'_blank'
    },
    'Click me to visit Google'
)

ReactDOM.createRoot(document.getElementById('root')).
render(
    <App/>

)
