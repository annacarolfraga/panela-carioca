import React from 'react'
import joao from "./Style/Imagens/jpfoto.png"
import adriana from "./Style/Imagens/adrianafoto.png"
import anna from "./Style/Imagens/annafoto.png"
import juan from "./Style/Imagens/juanfoto.png"
import './Style/Sobre.css'

const Sobre = () => {
  return (<div className='Sobre'>
    <h1>O panela carioca foi idealizado em 2022 por:</h1>

    <div  className='container-sobre'>
<div className="gallery2">

    <div className="desc2"> <img src={joao} ></img> <h1>João</h1> </div>
    <div className="desc2"><img src={anna} ></img><h1>Anna</h1> </div>
    <div className="desc2"><img src={juan}></img><h1>Juan</h1> </div>
    <div className="desc2"><img src={adriana}></img><h1>Adriana</h1> </div>

</div>
</div>
</div>
  )
}

export default Sobre