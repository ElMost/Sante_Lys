import React, { useState, useCallback } from "react";
 
// import "./Email.css";

 import Swal from "sweetalert2";
//  import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row } from "react-bootstrap/esm";
 import lettre from '../utils/img/contact-removebg-preview.png'

export default function Contact() {
  const [value, setValue] = useState();
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

//   const handleValueChange = useCallback((event) => {
//     setValue(event.target.value);
//   }, []);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const succesMessage = () => {
    Toast.fire({
      icon: "success",
      title: "Envoyer avec succès !",
    });
  };

  const handeSubmit = (e) => {
    console.log(name, tel, email, message);
    e.preventDefault();
    if (name && email && tel && message) {
      sendEmail({
        name,
        tel,
        email,
        message,
      });
    }
  };

  const sendEmail = (variable) => {
    console.log(variable);
    // emailjs
    //   .send(
    //     "service_tc5kj2k",
    //     "template_7te270a",
    //     variable,
    //     "user_CeUZSbU8Tow2n0Uj8WHhH"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.status);
    //       succesMessage();
    //       setName("");
    //       setEmail("");
    //       setTel("");
    //       setMessage("");
    //     },
    //     (error) => {
    //       console.log(error.text);
    //       Toast.fire({
    //         icon: "error",
    //         title: "Erreur veuillez réessayer",
    //       });
    //     }
    //   );
  };
  return (
    <Row className="mt-4">
        <h2 className="text-center mb-4">Contact</h2>
        <Col md="6">
            <img className="w-100" src={lettre}  alt="lettre"/>
        </Col>
        <Col md="6">
        <Form>
<Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nom</Form.Label>
        <Form.Control type="text"  placeholder="Votre Nom" 
         value={name}
        onChange={(e) => setName(e.target.value)}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        
        <Form.Control type="email" placeholder="Entrez votre email"  
         value={email} 
         onChange={(e) => setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Telephone</Form.Label>
        <Form.Control type="number"  placeholder="Entrez votre numero"   
        value={tel} 
        onChange={(e) => setTel(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Votre message</Form.Label>
        <Form.Control as="textarea" rows={3}
        value={message} 
        onChange={(e) => setMessage(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit"  onClick={handeSubmit}>
        Envoyer
      </Button>
    </Form>
        </Col>
    </Row>
 
 
     );
    }

{/* 
    <div className="container-form">
      <Card
        className="card-form"
        style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}
        >
        <CardContent>
        
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Nom"
                  id="name"
                  placeholder="Entrez votre nom"
                  variant="outlined"
                  fullWidth
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Prenom"
                  id="prenom"
                  value={prenom}
                  placeholder="Entrez votre prenom"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) => setPrenom(e.target.value)}
                  />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="email"
                  id="email"
                  label="Email"
                  placeholder="Entrez email"
                  variant="outlined"
                  fullWidth
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Message"
                  id="message"
                  multiline
                  rows={4}
                  placeholder="Entrez votre message"
                  variant="outlined"
                  fullWidth
                  required
                  value={value}
                  onChange={handleValueChange}
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  value="Send"
                  variant="contained"
                  size="medium"
                  fullWidth
                  onClick={handeSubmit}
                  >
                  Envoyer
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
     
    </div> */}
                  
  