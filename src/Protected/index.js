import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'


const Protected = () => {
    const auth = useSelector((state) =>state.auth);
  return auth.user ? <Outlet/> : <Navigate to='/login'/>
}

export default Protected
