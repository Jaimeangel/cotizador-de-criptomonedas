async function callApi(moneda){
    const api=await fetch(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=${moneda}&api_key={028dc61c2acb31b5c97238bc38e0dd509550501fc4d1ce99d0015805780b4069}`) 
    try {
        const data = await api.json()
        console.log(data.Data)
    } catch (error) {
        console.error(error)
    }
}

callApi('USD')