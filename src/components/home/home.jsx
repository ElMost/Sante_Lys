import React from 'react';
import ServicesCard from '../servicesCard/ServicesCard.jsx';
 

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import courseImg from '../utils/img/Volunteer-removebg-preview.png'
import coeur from '../utils/img/coeur-aide.svg-removebg-preview.png'
import loisir from '../utils/img/loisirs.png'
import repas from '../utils/img/repas.png'
import './home.css';
 


export default function home() {
  
  return (
    <>
<div className="custom-shape-divider-top-1696706824">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
    </svg>
</div>
 
        <Row className='d-flex justify-content-center vh-100'>
   
          <Col sm="6" md="5" lg="6" style={{ zIndex:1}}>
            <div className='d-flex justify-content-center align-items-center flex-column w-100 h-100 p-5' >
              <h1 >Sante&Lys</h1>
              <p className='mt-4 mb-4 text-justify'>Votre partenaire de confiance pour les services d'aide à la personne.
                Nous sommes dévoués à vous offrir des services de haute qualité pour améliorer la vie quotidienne de vous et de vos proches.
                Avec notre équipe d'experts, nous proposons une gamme complète de services personnalisés pour répondre à vos besoins spécifiques. Découvrez comment nous pouvons vous aider aujourd'hui.</p>
              <div className='btn-home'>

                <Button variant="primary">Nos services</Button>
                <Button variant="primary">Obtenir un Devis</Button>
              </div>
            </div>
  
          </Col>
          <Col className='d-flex justify-content-center align-items-center' sm="6" md="7" lg="6" style={{ zIndex:1}}> <img src={coeur} style={{
            width: "80%"
          }} /></Col>
          
        </Row>
        
         
         
      
  
    </>
  );
}
