import React, { useState } from 'react'
import { Style, CepInfos } from './Style'
import axios from 'axios'

export const Start = () => {
    const [cep, setCep] = useState()
    const [data, setData] = useState()
    
    let url = `https://viacep.com.br/ws/${cep}/json/`

    let getData = (() => {
        axios.get(url).then(res => res.data).then((res) => {
            setData(res)
        }).catch((err) => {
            console.log(err)
        })
    })

    function handle(e){
        setCep(e.target.value)
    }


    return (
        <Style>
            <div className='abaPesquisa'>
                <h1>CONSULTAR <span>CEP</span></h1>
                <div>
                    <input onChange={handle} type='number' placeholder='ex: 46400000' maxLength='8'/>
                    <button onClick={getData}><img id='img-buscar' src='https://cdn.pixabay.com/photo/2017/01/13/01/22/magnifying-glass-1976105_1280.png' alt='' /></button>
                </div>
            </div>
            <div className='infoCep'>
                {data && 
                    <CepInfos>
                       <h1 style={{color: '#82B7D4'}}>CEP: {data.cep}</h1>
                       <p>{data.localidade} - {data.uf}</p>
                       <div className='cepInfos'>
                            <div className='cepDetails'>
                                <p><span>Logradouro</span>: {data.logradouro}</p>
                                <p><span>Cidade</span>: {data.localidade}</p>
                            </div>
                            <div className='cepDetails'>
                                <p><span>CEP</span>: {data.cep}</p>
                                <p><span>UF</span>: {data.uf}</p>
                            </div>
                            <div className='cepDetails'>
                                <p><span>BAIRRO</span>: {data.bairro}</p>
                                <p><span>DDD</span>: {data.ddd}</p>
                            </div>
                       </div>
                    </CepInfos>
                }
            </div>
        </Style>
    )
}
