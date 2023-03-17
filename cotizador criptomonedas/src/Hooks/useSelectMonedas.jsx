import { useState } from 'react'
import styled from '@emotion/styled'

const Label=styled.label`
    color: white;
    display: block;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`
const Select=styled.select`
    width: 100%;
    margin: 0 0 20px 0;
    font-size: 20px;
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
                <option value="Seleccione">Selecciones</option>
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
