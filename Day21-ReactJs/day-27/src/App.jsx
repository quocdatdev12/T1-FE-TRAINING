import { useState } from 'react'
import './App.css'
import { DemoUseReducer } from './components/DemoUseReducer/DemoUseReducer'
import { ReactMeno } from './components/ReactMemo/ReactMeno'
import UserFilter from './components/DemoUseMemo/DemoUseMeno'
import { DemoUserCallBack } from './components/DemoUserCallBack/DemoUserCallBack'
import { DemouseRef } from './components/DemouseRef/DemouseRef'

function App() {
  return (
    <>
    {/* <ReactMeno /> */}
    {/* <UserFilter /> */}
    {/* <DemoUserCallBack/> */}
    <DemouseRef/>
    </>
  )
}

export default App
