import React from 'react'
import './Style/Cardapio.css';
import pao from "./Style/Imagens/paonew.png"
import queijos from "./Style/Imagens/tabuaqueijosnew.png"
import strogonoff from "./Style/Imagens/strognew.png"
import parmegiana from "./Style/Imagens/parmegiananew.png"
import sopa from "./Style/Imagens/sopamandnew.png"

const Cardapio = () => {
  return (
    <div className='Cardapio'>        
    <p><br></br><br></br>
    <h1> Nosso Cardápio:</h1>
    </p>

    <p>
  <img src={queijos} className = "img3"></img>
      <img src={pao} className = "img2"></img>
    <img src={strogonoff} className = "img4"></img>
    {/* <img src={parmegiana} className = "img5"></img>
    <img src={sopa} className = "img6"></img> */}
        <h2> 
            Entradas: <br></br> <br></br>
        Tábua de queijos --------------------------------------------  R$70 <br></br>
        Salada --------------------------------------------------------  R$70 <br></br>
        Azeitonas ----------------------------------------------------  R$70 <br></br>
        Pão Australiano da Casa -----------------------------------  R$70 <br></br>
        Tábua de queijos --------------------------------------------  R$70 <br></br>
        <br></br>
        Refeições: <br></br><br></br>
        Churrasco Misto --------------------------------------------  R$70 <br></br>
        Parmegiana--------------------------------------------------  R$70 <br></br>
        Strogonoff de Frango---------------------------------------  R$70 <br></br>
        Macarrão com almôndegas --------------------------------  R$70 <br></br>
        <br></br>
        Veganas: <br></br><br></br>
        Macarrão vegano -------------------------------------------  R$70 <br></br>
        Risoto de Legumes------------------------------------------  R$70 <br></br>
        Sopa de Mandioquinha-------------------------------------  R$70 <br></br>
        Caldo de Feijão ---------------------------------------------  R$70 

        </h2>
    </p>
    
    

    </div>


  )
}

export default Cardapio