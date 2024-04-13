import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Landing } from '../Landing'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </>
  )
}
