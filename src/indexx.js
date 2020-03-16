import React, { useState } from "react";
import "./indexx.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Modal,
  ModalTitle,
  Button,
  Form,
  Container,
  Col,
  Row,
  Card
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { TiChevronLeft } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { FiRefreshCw } from "react-icons/fi";
import { AiTwotoneThunderbolt } from "react-icons/ai";

class indexx extends React.Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Col md="4" id="ind-header">
            <div className="header">
              <header>
                <Link to="/profile">
                  <button
                    style={{
                      position: "absolute",
                      width: "60px",
                      height: "60px",
                      left: "60px",
                      top: "6px",
                      borderBottomLeftRadius: "50px",
                      borderBottomRightRadius: "50px",
                      borderTopLeftRadius: "50px",
                      borderTopRightRadius: "50px"
                    }}
                    // src="img/1200px-Kucing_Siam.jpg"
                  >
                    <img
                      src="img/1200px-Kucing_Siam.jpg"
                      style={{
                        backgroundimage: "url(/img/1200px-Kucing_Siam.jpg",
                        position: "absolute",
                        width: "60px",
                        height: "60px",
                        left: "-1px",
                        top: "-3px",
                        borderBottomLeftRadius: "50px",
                        borderBottomRightRadius: "50px",
                        borderTopLeftRadius: "50px",
                        borderTopRightRadius: "50px"
                      }}
                    ></img>
                  </button>
                </Link>
                <p style={{ fontSize: "40px" }}>Gary</p>
                <div
                  style={{
                    position: "absolute",
                    width: "60px",
                    height: "60px",
                    left: "12px",
                    top: "-3px"
                  }}
                >
                  <FaAngleDown
                    style={{
                      position: "absolute",
                      left: "120px",
                      width: "50px",
                      height: "50px",
                      top: "15px"
                    }}
                  />
                </div>
              </header>
              <img src="img/1200px-Kucing_Siam.jpg" className="img" />
              <h3 className="iconn">
                <b>match</b>
                <br></br>
              </h3>
              <h3 className="iconn">
                <b>
                  <br></br>_____
                </b>
              </h3>
              <div class="flex-containerr">
                <div>
                  <img
                    src="img/Gambar-Kucing-Gemuk-Lucu.jpg"
                    className="imgg"
                  />
                </div>
                <div>
                  <img
                    src="img/index.jpg"
                    style={{
                      width: "100px",
                      height: "110px",
                      margin: "-10px",
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px"
                    }}
                  />
                </div>
                <div>
                  <img
                    src="img/5bd29faf48728-wallpaper-preview.jpg"
                    style={{
                      width: "100px",
                      height: "110px",
                      margin: "-10px",
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px"
                    }}
                  />
                </div>
                <div>
                  <img
                    style={{
                      width: "100px",
                      height: "110px",
                      margin: "-10px",
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px"
                    }}
                    src="img/maxresdefault.jpg"
                  />
                </div>
                <div>
                  <img
                    style={{
                      width: "100px",
                      height: "110px",
                      margin: "-10px",
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px"
                    }}
                    src="img/85-854108_save-original-image-non-live-wallpaper-image-gambar.jpg"
                  />
                </div>
                <div>
                  <img
                    style={{
                      width: "100px",
                      height: "110px",
                      margin: "-10px",
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px"
                    }}
                    src="img/screen-0.jpg"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col md="8" id="ind-headerr">
            <Card style={{ width: "18rem", height: "360px", top: "-50px" }}>
              <Card.Img
                variant="top"
                src="img/screen-3.jpg"
                style={{ height: "300px" }}
              />
              <Card.Body>
                <Card.Title style={{ color: "#000000", fontSize: "24px" }}>
                  <b>Garry</b>
                </Card.Title>
                <Card.Text
                  style={{ color: "#000000", fontSize: "14px" }}
                ></Card.Text>
              </Card.Body>

              <Card.Body></Card.Body>
            </Card>
            <div>
              <FaCircle
                style={{
                  position: "absolute",
                  left: "425px",
                  top: "420px",
                  width: "60px",
                  height: "100px",
                  color: "#ffffff"
                }}
              />
              <FaHeart
                style={{
                  position: "absolute",
                  left: "434px",
                  top: "422px",
                  width: "40px",
                  height: "100px",
                  color: "#e65b5b"
                }}
              />
            </div>
            <div>
              <FaCircle
                style={{
                  position: "absolute",
                  left: "360px",
                  top: "420px",
                  width: "60px",
                  height: "100px",
                  color: "#ffffff"
                }}
              />
              <MdClose
                style={{
                  position: "absolute",
                  left: "365px",
                  top: "420px",
                  width: "50px",
                  height: "100px",
                  color: "#e65b5b"
                }}
              />
            </div>
            <div>
              <FaCircle
                style={{
                  position: "absolute",
                  left: "302px",
                  top: "420px",
                  width: "50px",
                  height: "100px",
                  color: "#ffffff"
                }}
              />
              <FiRefreshCw
                style={{
                  position: "absolute",
                  left: "312px",
                  top: "420px",
                  width: "30px",
                  height: "100px",
                  color: "#e65b5b"
                }}
              />
            </div>
            <div>
              <FaCircle
                style={{
                  position: "absolute",
                  left: "493px",
                  top: "420px",
                  width: "50px",
                  height: "100px",
                  color: "#ffffff"
                }}
              />
              <AiTwotoneThunderbolt
                style={{
                  position: "absolute",
                  left: "498px",
                  top: "422px",
                  width: "40px",
                  height: "100px",
                  color: "#e65b5b"
                }}
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
export default indexx;
