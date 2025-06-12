import { useSelector } from 'react-redux'
import './App.css'
import { Counter } from './components/Counter'
import { CounterToolkit } from './components/CounterToolkit'
import { ShoppingCarts } from './components/ShoppingCarts'

function App() {
  const count = useSelector((state) => state.counter.count)

  return (
    <>
     App: {count}
    {/* <ShoppingCarts/> */}
    {/* <Counter/> */}
    <CounterToolkit/>
    </>
  )
}

export default App
