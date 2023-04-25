import React, { useState } from 'react'
import Contexto from './Contexto'

const Provider = ({children}) => {
  const [lacorrecta,setCorrecta] = useState("")
  const escribirCorrecta =(aGuardar="")=>{
    setCorrecta(aGuardar)
  }
  return (
    <Contexto.Provider value={{
      lacorrecta,
      escribirCorrecta
    }}>
        {children}

    </Contexto.Provider>
  )
}

export default Provider
