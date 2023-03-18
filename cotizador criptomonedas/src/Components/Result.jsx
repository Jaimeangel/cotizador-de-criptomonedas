import styled from '@emotion/styled'

const Contenedor= styled.div`
    color: white;
    display: flex;
    align-items: center;
    margin-top: 20px;
    justify-content: space-between;
`
const Price=styled.p`
    font-size: 25px;
    span{
        font-weight: 700;
    }
`
const Texto=styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`
const Imagen=styled.img`
    width: 80px;
    height: 80px;
    display: block;
`

function Result({result}) {
    const {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,LASTUPDATE,IMAGEURL}=result;
  return (
    <Contenedor>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
        <div>
            <Price>El precio es de: <span>{PRICE}</span></Price>
            <Texto>El precio mas alto del dia es de: <span>{HIGHDAY}</span></Texto>
            <Texto>El precio mas bajo del dia es de: <span>{LOWDAY}</span></Texto>
            <Texto>Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Ultima actualizacion: <span>{LASTUPDATE}</span></Texto>
        </div>
    </Contenedor>
  )
}

export default Result;
