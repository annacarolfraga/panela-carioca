
import './Style/Home.css';
import Logo4 from'./Style/Imagens/Logo4.png'
import './Style/Home2.css';
import comida1 from "./Style/Imagens/8.png"
import comida2 from "./Style/Imagens/9.png"
import comida3 from "./Style/Imagens/10.png"

function Home() {
  return (<div>
    <div className="Home">
        <div id = "Logo2">
        <img id= "logo2" src= {Logo4}/>
        </div>
    </div>

        <div className="Home2">
        <div id = "restaurante">
            <div id = "container">
                <div id = "descricao">
                    <h1>Seja Bem-vindo(a)</h1> 

<p>Está procurando um lugar confortável e com a melhor comida caseira carioca? Então venha conhecer o  cardápio do Panela Carioca e se prepare para ter uma refeição inesquecível.</p>

                </div>
            </div>
        </div>
    </div>
    <h1 id='pratos'>Venha conhecer nossos pratos mais famosos</h1>
    <div id='Produtos'>
       
    <div className="gallery">

    <img src={comida1} ></img>

  <div className="desc"><h1>Bife</h1> <p> lLorem ipsum dolor sit amet consectetur adipisicing elit. Sint enim accusamus, illo suscipit nemo velit eveniet esse consequuntur. Est tenetur maiores sint ducimus molestiae reprehenderit perferendis laudantium, exercitationem culpa iure.  </p></div>
</div>

<div className="gallery">
  
    <img src={comida2} ></img>

  <div className="desc"><h1>Macarrão</h1> <p> lLorem ipsum dolor sit amet consectetur adipisicing elit. Sint enim accusamus, illo suscipit nemo velit eveniet esse consequuntur. Est tenetur maiores sint ducimus molestiae reprehenderit perferendis laudantium, exercitationem culpa iure.  </p></div>
</div>

<div className="gallery">
  
    <img src={comida3}></img>
  
  <div className="desc"><h1>Macarrão 2.0</h1> <p> lLorem ipsum dolor sit amet consectetur adipisicing elit. Sint enim accusamus, illo suscipit nemo velit eveniet esse consequuntur. Est tenetur maiores sint ducimus molestiae reprehenderit perferendis laudantium, exercitationem culpa iure.  </p></div>
</div>
    </div>
    </div>
  );
}




export default Home;
