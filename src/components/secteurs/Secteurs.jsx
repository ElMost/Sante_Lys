import React from 'react'
import"leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, useMap, Marker, GeoJSON } from 'react-leaflet'
import ValDoise from '../utils/data/departements/Val-Doise.json'
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import Map from "../utils/img/map.jpg"
import "./Secteurs.css"
import { Row } from 'react-bootstrap/esm';


export default function Secteurs() {

   
  const geoJsonStyle = ({ properties }) => {
    return { weight: 1 };
  };
  return (
    <Row className='mt-4'>
    <h2 className='text-center'>Secteur</h2>
    <div className='d-flex justify-content-start align-items-end'>

    <img src={Map} style={{
      width:"8%"
    }} alt='map'/>
    <h6 className='mb-3'>Sante&Lys intervient dans les communes d'Ile-de-france suivantes:</h6>
    </div>
    <Stack direction="horizontal" gap={2}>
      <Badge bg="primary">Villers le bel</Badge>
      <Badge bg="primary">Goussainville</Badge>
      <Badge bg="primary">Garges les Goness</Badge>
      <Badge bg="primary">Sarcelles</Badge>
      <Badge bg="primary">Montmagny</Badge>
      <Badge bg="primary">Deuil la barre</Badge>
      <Badge bg="primary">Domont</Badge>
      <Badge bg="primary">Gonesse</Badge>
      <Badge bg="primary">Saint Brice</Badge>
      <Badge bg="primary">Louvres</Badge>
      <Badge bg="primary">Saint Denis</Badge>
      <Badge bg="primary">Aulnay</Badge>
      </Stack>
    <div className='mt-3' style={{ height:"500px"}}>  
    <MapContainer center={[48.866667, 2.333333]} zoom={9} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <GeoJSON data={ValDoise} style={geoJsonStyle} />
  <Marker position={[51.505, -0.09]}>      
  </Marker>
</MapContainer>
    </div>
    </Row>
  )
}
