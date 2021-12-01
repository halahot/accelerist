import React from 'react'
import { useLocation } from 'react-router'
import { Form } from '../Form'
import { ResetForm } from '../ResetForm'

interface Props {

}

const WrapForm = (props: Props) => {
  const match = useLocation()
  
  return (
    <>
      {match.pathname === '/login' ? <Form /> : <ResetForm />}
    </>
  )
}

export default WrapForm
