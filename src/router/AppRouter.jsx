import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Landing } from '../Landing'
import { Login } from '../Login'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}
