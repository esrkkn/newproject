import React from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { FcKey } from "react-icons/fc";

const spacerStyle = {
  flex: "0.7",
};

export default function App() {
  return (
    <header className="text-center bg-image">
      <MDBNavbar
        expand="lg"
        light
        bgColor="white"
        sticky
        className="navbarExample02"
      >
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <MDBNavbarNav right className="mb-2 mb-lg-0">
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current="page" href="#">
                  <h5 className="logo">
                    <FcKey style={{fontSize: 30}}/>
                    SocialHouse<span>Project</span>
                  </h5>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current="page" href="#">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Ads</MDBNavbarLink>
              </MDBNavbarItem>
            
              <div style={spacerStyle}></div>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Create Post</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Register</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">LogIn</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>

      
    </header>
  );
}
