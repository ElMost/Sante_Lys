
import repas from'../img/repas.png'
import courseImg from'../img/Volunteer-removebg-preview.png'
import loisir from'../img/loisirs.png'
const services = [
    {
      title: "Aide à l'autonomie",
      services: ["Aide au lever/coucher", "Préparation des repas", "Aide a la prise de repas", "Aide a la toilette", "Garde d'enfant"],
      img: repas

    },
    {
      title: "Aide à domicile",
      services: ["Entretien du domicile", "Repassage", "Déplacement au domicile", "Accompagnement extérieur", "Sortie véhiculée", "Surveillance", "Sortie scolaire"],
      img: courseImg

    },
    {
      title: "Aide et loisirs",
      services: ["Bricolage", "Jardinage", "Soins et promenade animaux", "Aide administrative te informatique", "Soutien scolaire"],
      img: loisir

    }
  ]

  export default services