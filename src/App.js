
import React from "react";
import "./index.css";
import Cuervos from "./components/Cuervos";
import Inicio from "./components/Inicio";
import Taller from "./components/Taller";
import Enlaces from "./components/Enlaces";
import Noticias from "./components/Noticias";
import Galeria from "./components/Galeria";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Outlet,
} from "react-router-dom";
import { Navbar, Nav,} from "react-bootstrap";
import { useState } from 'react';

function App() {
    
    const [expanded, setExpanded] = useState(false);
    return (
        <>
        <div className="container-app">
            <Router>
                <header className="logo">
                    <Navbar.Brand className="mt-4">
                        <h1 className="navbar-brand-text  text-center cuervos-del-alba" style= {{color:"wheat" }}>
                            <Link to="/" className="brand-link ">
                                <img src="./Recursos/logo cuervos vector moneda.svg"/> Cuervos del Alba
                            </Link>
                        </h1>
                    </Navbar.Brand>
                    <Navbar expanded={expanded} bg="light"className="navbar-bg justify-content-left" expand="lg" >
                        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="nav nav-pills flex-column flex-sm-row">
                            <Nav className="me-auto  ">
                                <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/" className="flex-sm-fill nav-link active ms-5" style= {{color:"wheat" }}>
                                <img src="./Recursos/castillo.svg"/> Sobre nosotros
                                </Nav.Link>
                                <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/sobre-vignar" className="flex-sm-fill nav-link active ms-5" style= {{color:"wheat" }}>
                                <img className="cuervo" src="./Recursos/logo cuervos vector.svg"/> Sobre Vignar
                                </Nav.Link>
                                <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/eventos" className="flex-sm-fill nav-link active ms-5" style= {{color:"wheat" }}>
                                <img src="./Recursos/tablon.svg"/> Eventos
                                </Nav.Link>
                            </Nav>
                            <Nav className="ms-auto">
                                <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/galeria" className="flex-sm-fill nav-link active ms-5" style= {{color:"wheat" }}>
                                <img src="./Recursos/caballete.svg"/> Galería
                                </Nav.Link>
                                <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/taller" className="flex-sm-fill nav-link active ms-5"style= {{color:"wheat" }}>
                                <img className="yunke" src="./Recursos/yunke.svg"/> Taller
                                </Nav.Link>
                                <Nav.Link  onClick={() => setExpanded(false)} as={Link} to="/enlaces-de-interes" className="flex-sm-fill nav-link active ms-5 me-5"style= {{color:"wheat" }}>
                                <img src="./Recursos/flechas.svg"/> Enlaces de interés
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar></header>
                <div className="container mt-3">
                    <Routes>
                        <Route path="/" element={<Outlet />}>
                            <Route index element={<Inicio />} />
                            <Route path="/sobre-vignar" element={<Cuervos />} />
                            <Route path="/eventos" element={<Noticias />} />
                            <Route path="/galeria" element={<Galeria />} />
                            <Route path="/taller" element={<Taller />} />
                            <Route path="/enlaces-de-interes" element={<Enlaces />} />
                        </Route>
                    </Routes>
                </div>
            </Router>

         </div>
            <footer className="pie-pagina fixed-bottom">
          <p className="text-center">Salve Vignar</p>
        </footer>

       
        </>
    );
}
export default App;


