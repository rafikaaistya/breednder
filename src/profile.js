import React, { useState } from "react";
import "./profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import {
  Modal,
  ModalTitle,
  Button,
  Form,
  Container,
  Col,
  Row,
  Card,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { MDBRangeInput } from "mdbreact";
import { FaCamera } from "react-icons/fa";

const age = [
  { label: "Child", value: 1 },
  { label: "Teenager", value: 2 },
  { label: "Adult", value: 3 }
];
const species = [
  { label: "Cat", value: 1 },
  { label: "Dog", value: 2 },
  { label: "Rabbit", value: 3 },
  { label: "Bird", value: 4 },
  { label: "Sugar Glider", value: 5 }
];

class Profile extends React.Component {
  state = { show: false };
  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };
  render() {
    return (
      <div className="App">
        <Row>
          <Col md="4" id="ind-headere">
            <div className="header">
              <header>
                <Link to="/indexx">
                  <div style={{ position: "absolute", left: "20px" }}>
                    <FaAngleLeft />
                  </div>
                </Link>
                <img
                  src="img/1200px-Kucing_Siam.jpg"
                  style={{
                    backgroundimage: "url(/img/1200px-Kucing_Siam.jpg",
                    position: "absolute",
                    width: "60px",
                    height: "60px",
                    left: "55px",
                    top: "10px",
                    borderBottomLeftRadius: "50px",
                    borderBottomRightRadius: "50px",
                    borderTopLeftRadius: "50px",
                    borderTopRightRadius: "50px"
                  }}
                ></img>
                <p style={{ fontSize: "30px" }}>Profile Pet</p>
                <h3 className="iconnn">
                  Account Settings<br></br>
                </h3>
                <div className="page">
                  <span className="note">
                    Email<br></br>Phone
                  </span>
                  <span className="notee">
                    kepo@bgd.com<br></br>1234567890
                  </span>
                </div>
                <h3 className="iconnnn">
                  Discovery Settings<br></br>
                </h3>
                <div className="pagee">
                  <span className="note">
                    Maximum Distance<br></br>Age
                  </span>
                  <span className="notee">10km</span>
                  <span className="notee">Species</span>
                  <Select className="select" options={age} />
                  <Select className="selectt" options={species} />
                  <Link to="/">
                    <button className="buttonlogout">
                      <span className="logout">logout</span>
                    </button>
                  </Link>
                </div>
              </header>
            </div>
          </Col>
          <Col md="8" id="ind-headerre">
            <div>
              <header>
                <button className="buttonadd" onClick={this.handleShow}>
                  add pet
                </button>
                <Modal show={this.state.show} onHide={this.state.show}>
                  <Modal.Header
                    style={{ backgroundColor: "#c5adad" }}
                    closeButton
                    onClick={this.handleClose}
                  >
                    <Modal.Title
                      style={{ backgroundColor: "#c5adad" }}
                      className="textlore"
                    >
                      Premium
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body style={{ backgroundColor: "#c5adad" }}>
                    <p>
                      Upgrade Breednder-mu dan nikmati fitu-fitur <b>PRO</b>
                    </p>
                    <h4>
                      <b>Breednder : 0987654321</b>
                    </h4>
                    <Form>
                      <Form.Group controlId="formBasicBreeder">
                        <Form.Control type="text" placeholder="No. Rek Kamu" />
                      </Form.Group>
                    </Form>
                    <Card
                      style={{ left: "145px", width: "10rem", height: "9rem" }}
                    >
                      <Card.Body>
                        <div>
                          <FaCamera
                            style={{
                              left: "90px",
                              width: "115px",
                              height: "90px",
                              color: "#e65b5b"
                            }}
                          />
                        </div>
                        <Card.Text
                        //   style={{ color: "#000000", fontSize: "14px" }}
                        >
                          {/* //   breeder : rafika aistya <br></br>
                        //   10 km dari sini<br></br>
                        //   male adult<br></br>
                        //   phone breeder : 083896831233 */}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Modal.Body>
                  <Modal.Footer style={{ backgroundColor: "#c5adad" }}>
                    <Button className="buttonregisterr">Kirim</Button>
                  </Modal.Footer>
                </Modal>

                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="img/1200px-Kucing_Siam.jpg" />
                  <Card.Body>
                    <Card.Title style={{ color: "#000000", fontSize: "24px" }}>
                      <b>Garry</b>
                    </Card.Title>
                    <Card.Text style={{ color: "#000000", fontSize: "14px" }}>
                      breeder : rafika aistya <br></br>
                      10 km dari sini<br></br>
                      male adult<br></br>
                      phone breeder : 083896831233
                    </Card.Text>
                  </Card.Body>

                  <Card.Body>
                    <Link to="/edit">
                      <button className="buttoneditt">edit</button>
                    </Link>
                  </Card.Body>
                </Card>
              </header>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Profile;
