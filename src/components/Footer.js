import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer container">
      <img
        className="footer-logo"
        src="https://i.ibb.co/BL3NdVJ/footer.png"
        alt="Netflix"
      ></img>
      
      <div className='footer'>©2023 Criado por Marco Aurelio  durante a Imersão React da Alura</div>
      <p>Direitos de imagem para Netflix</p>
      <p>Dados pegos do site Themoviedb.org</p>
    </div>
  );
}
    
 

export default Footer

