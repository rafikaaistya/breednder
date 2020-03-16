import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getSpecies } from "./_actions/species";
import { connect } from "react-redux";
import { Modal, ModalTitle, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const App = ({ species, getSpecies }) => {
  const [show, setShow] = useState(false);
  const [showw, setShoww] = useState(false);
  const { data, loading, error } = species;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClosee = () => setShoww(false);
  const handleShoww = () => setShoww(true);

  useEffect(() => {
    getSpecies();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Swipe <b>right</b>.
        </h1>
        <h1>
          Make your pet <b>Happy</b> <br></br>
        </h1>
        <h7>
          by clicking enter, you agree to <u>our terms</u>. Learn how we process
          yourdata in
        </h7>
        <h7>
          our <u>Privacy Policy</u> and <u>Cookie Policy</u>. <br></br>
        </h7>
        <div className="icon">
          <p>Breednder</p>
        </div>
      </header>
      <button className="buttonregister" onClick={handleShow}>
        register
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="textlore">Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicBreeder">
              <Form.Control type="text" placeholder="Breeder" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicPhone">
              <Form.Control type="text" placeholder="Phone Breeder" />
            </Form.Group>
            <Form.Group controlId="formBasicAddress">
              <Form.Control type="text" placeholder="Address breder" />
            </Form.Group>
            <Form.Group controlId="formBasicNamePet">
              <Form.Control type="text" placeholder="Name Pet" />
            </Form.Group>
            <Form.Group controlId="formBasicGenderPet">
              <Form.Control type="text" placeholder="Gender Pet" />
            </Form.Group>
            <Form.Group controlId="formBasicSpesiesPet">
              <select>
                {data.map((item, index) => (
                  <option>{item.name}</option>
                ))}
              </select>
            </Form.Group>
            <Form.Group controlId="formBasicAgePet">
              <Form.Control type="text" placeholder="Age Pet" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="buttonregisterr">Register</Button>
        </Modal.Footer>
      </Modal>

      <button className="buttonlogin" onClick={handleShoww}>
        login
      </button>
      <Modal show={showw} onHide={handleClosee}>
        <Modal.Header closeButton>
          <Modal.Title className="textlore">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/indexx">
            <Button variant="primary" className="buttonloginn">
              Login
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>

      <div className="bottom">
        <footer> FIND YOUR PET'S MATCH</footer>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    species: state.species
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSpecies: () => dispatch(getSpecies())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
