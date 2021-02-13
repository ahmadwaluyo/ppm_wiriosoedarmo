import React, { Fragment } from "react";
// import { HomeOutlined, InfoCircleOutlined, LaptopOutlined, FileOutlined, PictureOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import Contact from "./Contact";

export default function NavbarPage () {
  const history = useHistory();

  return (
    <Fragment>
    <Contact />
    <Navbar style={{backgroundColor: "transparent", fontWeight: 500}} variant="dark" expand="md">
      <Navbar.Brand onClick={() => history.push("/")}>
      <img
        width={50}
        src="https://i.ibb.co/PctKXNL/wiriosoedarmo.png"
        alt="img-wirio"
        title="PPM Wiriosoedarmo Gombong"
        />&nbsp;
        PPM Wiriosoedarmo Gombong
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-light">
        <div className="mr-auto"></div>
        <Nav className="m2-2">
          <Nav.Link onClick={() => history.push("/")} className="d-flex align-items-center">Home</Nav.Link>
          <NavDropdown title="Tentang Kami" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => history.push("/sejarah")}>Sejarah</NavDropdown.Item>
            <NavDropdown.Item onClick={() => history.push("/visimisi")}>Visi & Misi</NavDropdown.Item>
            <NavDropdown.Item onClick={() => history.push("/fasilitas")}>Fasilitas</NavDropdown.Item>
            <NavDropdown.Item onClick={() => history.push("/sambutan")}>Sambutan Mudhir</NavDropdown.Item>
            <NavDropdown.Item onClick={() => history.push("/jenjang-pendidikan")}>Jenjang Pendidikan</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Service Online" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => history.push("/admission")}>Pendaftaran</NavDropdown.Item>
            <NavDropdown.Item onClick={() => history.push("/pembayaran")}>Info Pembayaran</NavDropdown.Item>
            <NavDropdown.Item onClick={() => history.push("/perijinan")}>Perijinan</NavDropdown.Item>
            <NavDropdown.Item onClick={() => history.push("/login-page")}>Login</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Article & News" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => history.push("/blog")}>Blog</NavDropdown.Item>
            <NavDropdown.Item onClick={() => history.push("/news")}>News</NavDropdown.Item>
            <NavDropdown.Item onClick={() => history.push("/announcement")}>Announcement</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link onClick={() => history.push("/galery")} className="d-flex align-items-center">Galery</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Fragment>
  )
}

