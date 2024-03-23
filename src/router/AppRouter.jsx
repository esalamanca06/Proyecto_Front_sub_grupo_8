import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Landing } from '../Landing'
import { More } from '../More'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/more" element={<More/>}/>
      </Routes>
    </>
  )
}
