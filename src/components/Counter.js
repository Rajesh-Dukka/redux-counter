import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/actions'

const Counter = () => {
    const value = useSelector((prev) => prev.counter.count )

    const dispatch=useDispatch()

  return (
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <button style={{height: '40px', width: '140px'}} onClick={() => dispatch(decrement())}>Decrement</button>
      <p style={{margin: '10px'}}>{value }</p>
      
      <button style={{height: '40px', width: '140px'}} onClick={() => dispatch(increment())}>Increment</button>
    </div>
  )
}

export default Counter