import styled from '@emotion/styled'
import useSelectMonedas from '../Hooks/useSelectMonedas.jsx'
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
    cursor: pointer;
    transition: background-color .3s ease;
    &:hover{
        background-color: #7a7dfe;
    }
`

function Form(){

    const [moneda,SelectMonedas]=useSelectMonedas('Seleccione su moneda',monedas)

  return (
    <form>
        <SelectMonedas/>
        <InputSubmit 
            type="submit" 
            value="Cotizar"
        />
    </form>
  )
}

export default Form;
