import { useState } from 'react'
import styled from '@emotion/styled'

const Label=styled.label`
    color: white;
    display: block;
    font-size: 24px;
    font-weight: 700;
    margin: 10px 0;
    letter-spacing: 1px;
`
const Select=styled.select`
    width: 100%;
    margin: 5px 0;
    font-size: 20px;
    padding: 8px;
    border-radius: 5px;
`

const useSelectMonedas=(label,opciones)=>{
    const [state,setState]=useState('')
    const selectMonedas=()=>(
        <>
            <Label htmlFor="">{label}</Label>
            <Select
                value={state}
                onChange={(e)=>setState(e.target.value)}
            >
                <option>Seleccione</option>
                {
                    opciones.map(divisa=>(
                        <option 
                            value={divisa.id}
                            key={divisa.id}
                        >
                            {divisa.nombre}
                        </option>
                    ))
                }
            </Select>
        </>
    )
    return [state,selectMonedas]
}

export default useSelectMonedas;
