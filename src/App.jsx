import { useDispatch, useSelector } from 'react-redux'

import './App.css'
import { increment, decrement, incrementByAmount } from './store/slices/counter'

function App() {

  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch();
  return (
    <>
      <div className='App'>
      
      </div>
      <h1> count is {counter}</h1>
      <div className="card">
        <button onClick={() => { dispatch(increment()) }}>
          increment
        </button>
        <button onClick={() => { dispatch(decrement()) }}>
          decrement
        </button>
        <button onClick={() => { dispatch(incrementByAmount(2)) }}>
          increment by 2
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

    </>
  )
}

export default App
