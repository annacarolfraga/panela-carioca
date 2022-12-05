import blogFetch from '../axios/config';
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Style/Adm.css";

const Adm = () => {

  const [posts, setPost] = useState([])

  const getPosts = async () => {

    try {
      
      const response = await blogFetch.get("/Chefes")
  
      const data = response.data
      setPost(data);
      console.log(data)

    } catch (error) {
      console.error();
    }

  };
 
  useEffect(() => {

    getPosts();

  }, []);

  return(
  <div className='home'>

    <h1>Chefes</h1>
    {posts.length === 0 ? <p>Carregando.. </p> : ( 
      posts.map((Chefes) => (
        <div className="post" key={Chefes.id}>
          <h2> {Chefes.nome}</h2>
          <p>{Chefes.email}</p>
          <Link to={`/Fornecedores/${Chefes.id}`} className = "btn">Ler Mais</Link>
        </div>
      ))
    )}
  </div>
  ) 
}

export default Adm