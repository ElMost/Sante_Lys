import Home from "./components/home/home"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar/navbar";
import QuiSommeNous from "./components/quiSommeNous/QuiSommeNous";
import Secteurs from "./components/secteurs/Secteurs";
import Container from 'react-bootstrap/Container';
import ServicesCard from "./components/servicesCard/ServicesCard";
import Contact from "./components/contact/Contact";
 


function App() {

 
  return (
    <>
    <Navbar/>
    <Container >
    <Home/>
    <QuiSommeNous/>
     <ServicesCard />
    <Secteurs/>
    <Contact/>
    </Container>
    </>
  )
}

export default App;
