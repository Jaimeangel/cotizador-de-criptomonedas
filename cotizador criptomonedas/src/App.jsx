import styled from '@emotion/styled'
import ImageCripto  from './assets/imagen-criptos.png'
import Form from './Components/Form'

const Heading=styled.h1`
  color:#fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
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
  return (
    <Contenedor>
      <ImgCripto
        src={ImageCripto}
        alt="Imagenes logotipos criptomonedas"
      />
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Form/>
      </div>
    </Contenedor>
  )
}

export default App;
