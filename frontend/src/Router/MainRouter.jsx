import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import UserRegister from '../components/UserRegister/UserRegister'
import UserLogin from '../components/Login/Login'

export default function MainRouter () {
  return (
    <Fragment>
      <Routes>
        <Route exact path='/login' element={<UserLogin />} />
        <Route exact path='/' element={<UserRegister />} />
      </Routes>
    </Fragment>
  )
}
