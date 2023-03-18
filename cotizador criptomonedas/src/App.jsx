import styled from '@emotion/styled'
import { useState,useEffect } from 'react'
import ImageCripto  from './assets/imagen-criptos.png'
import Form from './Components/Form'
import Result from './Components/Result'

const Heading=styled.h1`
  color:#fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 30px;
  font-size: 34px;
  letter-spacing: 1px;
  &::after{
    content: '';
    width: 150px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`
const Contenedor=styled.div`
  max-width:900px;
  margin: 0 auto;
  width:90%;
  @media (min-width:992px){
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
  }
`
const ImgCripto=styled.img`
  display:block;
  max-width:400px;
  width:80%;
  margin:100px auto 0 auto;
`

function App() {
  const [Coins,setCoins]=useState({})
  const [result,setResult]=useState({})

  useEffect(()=>{
    if(Object.keys(Coins).length>0){
      const {moneda,monedaCripto}=Coins;
      try{
        const consultarPrecioMoneda = async ()=>{
          const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${monedaCripto}&tsyms=${moneda}&api_key={028dc61c2acb31b5c97238bc38e0dd509550501fc4d1ce99d0015805780b4069}`
          const api = await fetch(url) 
          const response = await api.json()
          setResult(response.DISPLAY[monedaCripto][moneda])
        }
        consultarPrecioMoneda()
      }catch(error) {
        console.error(error)
      }
    }
  },[Coins])

  return (
    <Contenedor>
      <ImgCripto
        src={ImageCripto}
        alt="Imagenes logotipos criptomonedas"
      />
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Form
          setCoins={setCoins}
        />
        {result.PRICE && <Result result={result} />}
      </div>
    </Contenedor>
  )
}

export default App;
