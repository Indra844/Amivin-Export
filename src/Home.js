import React from "react";
import "./Home.css";
import NavBar from "./NavBar";
import OutdoorGrillIcon from "@material-ui/icons/OutdoorGrill";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import CheckIcon from "@material-ui/icons/Check";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import LinkedCameraIcon from "@material-ui/icons/LinkedCamera";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

function Home() {
  return (
    <div>
      <div className="home__container">
        <div className="container home">
          <div className="row text__image">
            <div className="col-lg-6 order-2 order-lg-1 home__page">
              <div className="home__tags">
                <h1>
                  Welocme to Exports
                  <strong className="brand__name">Amivin Global Exports</strong>
                </h1>
                <h2 className="my-3">
                  Most Reliable Sourcing Destination From India
                </h2>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 image__container">
              <img
                className="home__image "
                src="https://www.odnmu.com/wp-content/uploads/2017/03/15-The-Surgical-Department.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home__level2">
        <div className="container-fluid">
          <div className="row order-2 order-lg-1 ">
            <div className="col-10 mx-auto">
              <div className="level2__heading">
                <h2>Surgical Gowns Level2 (AAMI LEVEL2 SPECIFCATION) </h2>
              </div>
              <div className="row">
                <div className="col-md-3 surgical-image">
                  <div className="card mb-4 shadow-sm ">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/I/51yjFHLlm%2BL._SL1000_.jpg"
                      className="surcial__image"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card mb-4 shadow-sm">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/I/51yjFHLlm%2BL._SL1000_.jpg"
                      className="surcial__image"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card mb-4 shadow-sm">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/I/51yjFHLlm%2BL._SL1000_.jpg"
                      className="surcial__image"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card mb-4 shadow-sm">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/I/51yjFHLlm%2BL._SL1000_.jpg"
                      className="surcial__image"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home__level3">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-10 mx-auto">
              <div className="level3">
                <div className="level3__left order-2 order-lg-1">
                  <img
                    className="rounded-circle level3__image"
                    src="https://www.doctorshosplaredo.com/sites/doctorshosplaredo.com/files/images/banner/surgery.jpg"
                    alt=""
                  />
                </div>
                <div className="level3__right order-1 order-lg-2">
                  <div>
                    <h4>
                      SMS (Spunbond Mektblown Spunbond) Non Woven Material
                    </h4>
                    <ul>
                      <li>
                        <p>
                          It is made up of a top layer of spunbond
                          ploypropyelene, a middle layer of melltblown
                          ploypropyelene and bottom layer of spunbond
                          ploypropyelene.
                        </p>
                      </li>
                      <li>SMS has mainly three anti function.</li>
                      <li>Anti-Blood</li>
                      <li>Anti-Alcohol</li>
                      <li>Anti-Static</li>
                      <li>Meet AAMI level2 specifications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home__level4">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-10 mx-auto">
              <div className="about">
                <h3 className="order-1 order-lg-1">About Amivin</h3>
                <p className="order-2 order-lg-2">
                  We are the leading consumer goods sourcing and logistics
                  company in India. Amivin Global Exports Corporate office at
                  Noida Uttarpradesh India is Leading Firm in exports of all the
                  Products To be Procured From India we serve Middle east Africa
                  Europe Russia China and most Part of the world. We have prompt
                  Service and strict Quality Policy we garunantee our product
                  Quality and assure excellence in our services. Amivin.in is
                  most reliable sourcing platform which delivers amazing
                  products to brands and retailers worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home__level5">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-10 mx-auto">
              <div className="level5">
                <h1>AMIVIN.IN</h1>
                <div className="level5__logo">
                  <div className="logo">
                    <OutdoorGrillIcon fontSize="large" />
                    <p>Product Shipping</p>
                  </div>
                  <div className="logo">
                    <AttachMoneyIcon fontSize="large" />
                    <p>Pricing</p>
                  </div>
                  <div className="logo">
                    <PersonOutlineIcon fontSize="large" />
                    <p>Production Follow-up</p>
                  </div>
                </div>
                <div className="level5__logo">
                  <div className="logo">
                    <CheckIcon fontSize="large" />
                    <p>Quality Inspection</p>
                  </div>
                  <div className="logo">
                    <HomeWorkIcon fontSize="large" />
                    <p>Warehouse</p>
                  </div>
                  <div className="logo">
                    <LinkedCameraIcon fontSize="large" />
                    <p>Product Photography</p>
                  </div>
                  <div className="logo">
                    <LocalShippingIcon fontSize="large" />
                    <p>Shipping</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
