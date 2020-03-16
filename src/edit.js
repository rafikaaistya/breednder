import React, { useState } from "react";
import "./edit.css";
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
import { MDBRangeInput } from "mdbreact";
import { FaAngleLeft } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { AiFillPlusCircle } from "react-icons/ai";

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

function edit() {
  return (
    <div className="App">
      <Row>
        <Col md="4" id="ind-headere">
          <div className="header">
            <header>
              <Link to="/profile">
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

              <p style={{ fontSize: "30px" }}>Edit Profile Pet</p>
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
                <Select className="select" options={age} placeholder="adult" />
                <Select
                  className="selectt"
                  options={species}
                  placeholder="cat"
                />
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
              {/* <button className="buttonadd">add pet</button> */}
              <Card
                style={{
                  width: "420px",
                  height: "500px",
                  background: "#e0d9d9"
                }}
              >
                <Card.Body>
                  <Card.Body>
                    <div className="flex-container">
                      <div>
                        <img
                          src="img/1200px-Kucing_Siam.jpg"
                          className="imgg"
                        />

                        <div>
                          <IoIosCloseCircle
                            style={{
                              position: "absolute",
                              left: "85px",
                              top: "-29px",
                              width: "30px",
                              height: "90px",
                              color: "#ec0505"
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <div>
                          <AiFillPlusCircle
                            style={{
                              position: "absolute",
                              left: "205px",
                              top: "-29px",
                              width: "30px",
                              height: "90px",
                              color: "#e65b5b"
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <div>
                          <AiFillPlusCircle
                            style={{
                              position: "absolute",
                              left: "325px",
                              top: "-29px",
                              width: "30px",
                              height: "90px",
                              color: "#e65b5b"
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <div>
                          <AiFillPlusCircle
                            style={{
                              position: "absolute",
                              left: "85px",
                              top: "100px",
                              width: "30px",
                              height: "90px",
                              color: "#e65b5b"
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <div>
                          <AiFillPlusCircle
                            style={{
                              position: "absolute",
                              left: "205px",
                              top: "100px",
                              width: "30px",
                              height: "90px",
                              color: "#e65b5b"
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <div>
                          <AiFillPlusCircle
                            style={{
                              position: "absolute",
                              left: "325px",
                              top: "100px",
                              width: "30px",
                              height: "90px",
                              color: "#e65b5b"
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                  <Card.Text
                    style={{
                      position: "absolute",
                      color: "#000000",
                      fontSize: "14px",
                      top: "300px",
                      left: "60px"
                    }}
                  >
                    <b>Name Pet</b>
                    <br></br>
                    <div className="paget">
                      <span>Yosie</span>
                    </div>
                    <br></br>
                    <br></br>
                    <b>Breeder</b>
                    <div className="pagett">
                      <span>Rafika</span>
                    </div>
                  </Card.Text>
                  <Card.Title
                    style={{
                      color: "#000000",
                      fontSize: "24px",
                      top: "100px"
                    }}
                  >
                    <b>Garry</b>
                  </Card.Title>
                </Card.Body>
                <Card.Body>
                  <Link to="/profile">
                    <button className="buttonedit">save</button>
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

export default edit;
