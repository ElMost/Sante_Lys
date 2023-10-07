import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Team from "../utils/img/team.png";
import Button from "react-bootstrap/Button";
import "./QuiSommeNous.css";

export default function QuiSommeNous() {
  return (
    <Row className="mt-4">
      <h2 className="text-center mb-4">Qui Somme Nous ?</h2>

      <Col md="5" className="d-flex justify-content-center align-items-center">
        <img src={Team} alt="team" className="w-100" />
      </Col>
      <Col md="7">
        <p className="text-justify">
          {" "}
          Chez Sante&Lys nous comprenons l'importance de pouvoir vivre chez soi
          en toute autonomie tout en beneficient d'un accompagnement
          personnalisé dans les actes couraant de la vie quotidienne. C'est
          pourquoi nous somme là pour vous offrir notre soutient chaleureux et
          professionnel.
          <br />
          Nous croyons fermement en l'importance de la compassion et de la
          bienveillance dans notre travail. Notre équipe dévouée est la pour
          vous écouter, vous comprendre et répondre à vos besoin spécifique. Que
          vous soyez une personne âgéen un parent d'enfant, une personne ayant
          des besoins spéciaux ou un propriétaire d'animaux domestiques, nous
          somme là pour vous accompagner et vous fournir les services adaptés.
          <br />
          <br />
          Notre mission est de vous aider à maintenir votre indépendance, votre
          confort et votre sécurité au sein de votre domicile bien aimé. Que ce
          soit pour la préparation de repas nutritifs, l'aide à la toilette,
          l'accompagnement lors de vos sorties ou les soins de vos animaux de
          compagnies, notre équipe est formée pour répondre à vos besoins avec
          compétence et empathie.
          <br />
          <br />
          Nous somme fiers de notre engagement envers là qualité des services
          que nous offrons. Notre objectif est de vous fournir un environnement
          sécurisé et bienveillant ou vous pouvez vous épanouir. Votre
          satisfaction est notre priorité absolue.
          <br />
          <br />
          Laissez-nous prendre soin de vous et vous accompagner dans les moments
          de votre vie ou vous avez besoin d'un soutient supplémentaire. Faites
          confiance à Sante&lys pour vous offrir l'accompagnement personnalisé
          dont vous avez besoin.
        </p>
        <Button variant="primary">Nous contacter</Button>
      </Col>
    </Row>
  );
}
