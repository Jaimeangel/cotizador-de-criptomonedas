import { useState,useEffect } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../Hooks/useSelectMonedas.jsx'
import ValidateCampos from './Validate.jsx'
import monedas from '../Data/monedas.js'

const InputSubmit=styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    color: white;
    border-radius: 5px;
    margin-top: 20px;
    cursor: pointer;
    transition: background-color .3s ease;
    &:hover{
        background-color: #7a7dfe;
    }
`

function Form({setCoins}){
    const [Validate,setValidate]=useState(false)
    const [criptos,setCriptos]=useState([])
    const [moneda,SelectMonedas]=useSelectMonedas('Seleccione su moneda',monedas)
    const [monedaCripto,SelectCriptos]=useSelectMonedas('Seleccione su criptomoneda',criptos)

    useEffect(()=>{
        const consultarApi= async()=>{
            try{
                const url = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&api_key={028dc61c2acb31b5c97238bc38e0dd509550501fc4d1ce99d0015805780b4069}`
                const api = await fetch(url) 
                const data = await api.json()
                const dataArray = data.Data.map( cripto => {
                    const coin={
                        id:cripto.CoinInfo.Internal,
                        nombre:cripto.CoinInfo.FullName,
                    }
                    return coin;
                })
                setCriptos(dataArray)
            }catch(error){
                console.error(error)
            }
        }
        consultarApi()
    },[])

    function handleSubmit(e){
        e.preventDefault()
        if([moneda,monedaCripto].includes('')){
            setValidate(true)
            setTimeout(() => {
                setValidate(false)
            }, 2500);
            return   
        }
        setCoins({
            moneda,
            monedaCripto
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        {
            Validate && <ValidateCampos/>
        }
        <SelectMonedas/>
        <SelectCriptos/>
        <InputSubmit 
            type="submit" 
            value="Cotizar"
        />
    </form>
  )
}

export default Form;
