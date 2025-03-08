import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

   let newArr = [1,2,3,4,5,6,7,8,9]
  return (
    <>
     <h1 className='text-3xl bg-green-500 rounded-md p-3 ' >Vite with Tailwind</h1>
     <label htmlFor=""></label>
     <Card username="noor" myArr = {newArr}/>
     <Card username='Sohag' post='Good'/>
     <Card />

    </>
  )
}

export default App
