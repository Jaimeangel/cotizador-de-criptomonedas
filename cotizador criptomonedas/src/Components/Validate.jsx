import styled from '@emotion/styled'

const Validate=styled.div`
    background-color: #ff6969;
    color: white;
    text-align: center;
    padding: 10px;
    font-size: 20px;
    font-weight: 700;
    border-radius: 5px;
    text-transform: uppercase;
`

function ValidateCampos() {
  return (
    <Validate>
      Todos los campos son obligatorios
    </Validate>
  )
}

export default ValidateCampos;
