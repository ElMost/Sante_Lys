import React from 'react'
import Col from "react-bootstrap/Col"
import Row  from 'react-bootstrap/Row';
import services from "../utils/data/services";
import CardServices from './CardServices'
export default function ServicesCard(props) {
  return (
    <Row className='mt-4'>
    <h2 className='text-center mb-4'>Nos Services</h2>
    <Col md="4"  className='w-100 d-flex justify-content-around '>
    {services.map((data, index) => (
            <CardServices
              key={index}
              title={data.title}
              services={data.services}
              img={data.img}
            />
          ))}
     
    </Col>
            </Row>
  )
}

