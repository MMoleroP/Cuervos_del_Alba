
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Outlet,
} from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "./index.css";
import Cuervos from "./components/Cuervos";


function Inicio() {
    return (
      <div class="contenido">
        <div class="bienvenida">
          <h1 className="text-center">Bienvenidos</h1>
          <h2 className="text-center">Hijos de Vignar</h2>
          <p>Bienvenidos a la página oficial de Cuervos del Alba. Somos un grupo amigos a los que nos ha juntado
              una pasión compartida: el rol en vivo (<em>LARP</em>, por <em>Live Action Rol-Playing</em>, en sus
              siglas en inglés).<br/>Hemos crecido mucho desde nuestros comienzos en 2017: somos muchos más y
              estamos listos para dar guerra ... literalmente.<br/> Nuestro propósito a la hora de crear esta página es 
              tener un lugar donde dar a conocer el trasfondo que hemos ideado para nuestro grupo, <br/>uno que dota de 
              sentido, carácter e historia a nuestros personajes, sea cual sea el rol en el que participemos, 
              dándonos la oportunidad de tener algo constante allá donde vayamos.<br/>
              
          </p>
        </div>
  
        {/*<div class="left-banner">
          CUERVOS
        </div>
        <div class="right-banner">
          DEL ALBA
    </div>*/}
      </div>
    );
}

function Noticias() {
    return (
      <>
        <h1 className="text-center">Eventos de rol</h1>
        <p class="eventos-intro">Por si quieres estar al tanto de los eventos en los que participemos</p>
        
        <h2 className="futuros ms-auto">Próximos eventos...</h2>
            
            <div class="evento-izq">
                <p class="fecha">31,31 y 1 AGO-SEP 24</p>
                <p class="datos">Fuel Wars. Rol en vivo apocalíptico</p>
                <p class="asociación"><a href="https://asociacioneter.org/">Asociación Éter</a></p>            
            </div>
            <div class="evento-der">
                <p class="fecha">27,28 y 29 SEP 24</p>
                <p class="datos">Unión. Vientos de progreso. Rol en vivo medieval fantástico-steampunk</p>
                <p class="asociación"><a href="https://asociacioneter.org/">Asociación Éter</a></p>            
            

                <h2 className="futuros ms-auto">Eventos anteriores...</h2>
            <div class="evento-izq">
                <p class="fecha">24 FEB 24</p>
                <p class="datos">Reinos Enfrentados IX. Wargame</p>
                <p class="asociación"><a href="https://asociacioneter.org/">Asociación Éter</a></p>            
            </div>
            <div class="evento-der">
                <p class="fecha">18 NOV 23</p>
                <p class="datos">Omnia. Tierras de Sangre. Wargame</p>
                <p class="asociación"><a href="https://www.asociacionaequilibrium.org/">Asociación Æquilibrium</a></p>            
            </div>
            <div class="evento-izq">
                <p class="fecha">28 OCT 23</p>
                <p class="datos">Reinos Enfrentados VIII. Wargame</p>
                <p class="asociación"><a href="https://asociacioneter.org/">Asociación Éter</a></p>            
            </div>
            <div class="evento-der">
                <p class="fecha">15,16 y 17 SEP 23</p>
                <p class="datos">Unión. Sombras del pasado. Rol en vivo medieval fantástico-steampunk</p>
                <p class="asociación"><a href="https://asociacioneter.org/">Asociación Éter</a></p>            
            </div>
            <div class="evento-izq">
             <p class="fecha">9, 10 y 11 JUN 23</p>
             <p class="datos">Fuel Wars. Rol en vivo</p>
             <p class="asociación"><a href="https://asociacioneter.org/">Asociación Éter</a></p>            
            </div>
            <div class="evento-der">
             <p class="fecha">27 MAY 23</p>
             <p class="datos">Reinos Enfrentados VII. Wargame</p>
             <p class="asociación"><a href="https://asociacioneter.org/">Asociación Éter</a></p>            
            </div>
            <div class="evento-izq">
             <p class="fecha">15 ABR 23</p>
             <p class="datos">Omnia. La ruina de Val'Sacer</p>
             <p class="asociación"><a href="https://www.asociacionaequilibrium.org/">Asociación Æquilibrium</a></p>            
            </div>
            <div class="evento-izq">
             <p class="fecha">25 FEB 23</p>
             <p class="datos">Reinos Enfrentados VI. Wargame</p>
             <p class="asociación"><a href="https://asociacioneter.org/">Asociación Éter</a></p>            
            </div>
        
            
        </div>
      </>
    );
}
function Galeria() {
    return (
      <>
        <h1 className="text-center">Galería de fotos</h1>
            
        
        <p class="img-intro">Para que os vayan sonando nuestras caras, aquí hay una selección de fotos de algunos de los eventos a los que hemos enviado a nuestras fuerzas</p>

        

            <h2 className="img-evento ms-auto">Reinos Enfrentados IX
              <div class="img-container">
                  <img src="./Recursos/Reinos IX 2024/1.jpg"/>
                  <img src="./Recursos/Reinos IX 2024/2.jpg"/>
                  <img src="./Recursos/Reinos IX 2024/3.jpg"/>
                  <img src="./Recursos/Reinos IX 2024/4.jpg"/>
                  <img src="./Recursos/Reinos IX 2024/5.jpg"/>
                  <img src="./Recursos/Reinos IX 2024/6.jpg"/>
                  <img src="./Recursos/Reinos IX 2024/7.jpg"/>
                  <img src="./Recursos/Reinos IX 2024/8.jpg"/>
                  <img src="./Recursos/Reinos IX 2024/9.jpg"/>
              </div>
              </h2>
          
              <h2 className="img-evento ms-auto">Omnia. Tierras de Sangre 
              <div class="img-container">
                  <img src="./Recursos/Omnia noviembre/1.jpeg"/>
                  <img src="./Recursos/Omnia noviembre/2.jpeg"/>
                  <img src="./Recursos/Omnia noviembre/3.jpeg"/>
                  <img src="./Recursos/Omnia noviembre/4.jpeg"/>
                  <img src="./Recursos/Omnia noviembre/5.jpeg"/>
                  <img src="./Recursos/Omnia noviembre/6.jpeg"/>
                  <img src="./Recursos/Omnia noviembre/7.jpeg"/>
              </div>
          </h2>

          <h2 className="img-evento ms-auto">Reinos Enfrentados VIII
              <div class="img-container">
                  <img src="./Recursos/Reinos VIII/1.jpg"/>
                  <img src="./Recursos/Reinos VIII/2.jpg"/>
                  <img src="./Recursos/Reinos VIII/3.jpg"/>
                  <img src="./Recursos/Reinos VIII/4.jpeg"/>
                  <img src="./Recursos/Reinos VIII/5.jpeg"/>
                  <img src="./Recursos/Reinos VIII/6.jpeg"/>
                  <img src="./Recursos/Reinos VIII/7.jpeg"/>
                  <img src="./Recursos/Reinos VIII/8.jpeg"/>
                  <img src="./Recursos/Reinos VIII/9.jpeg"/>
              </div>
          </h2>

          <h2 className="img-evento ms-auto">Unión 2023
              <div class="img-container">
                  <img src="./Recursos/Unión 2023/1.jpg"/>
                  <img src="./Recursos/Unión 2023/2.jpg"/>
                  <img src="./Recursos/Unión 2023/3.jpg"/>
                  <img src="./Recursos/Unión 2023/4.jpg"/>
                  <img src="./Recursos/Unión 2023/5.jpg"/>
                  <img src="./Recursos/Unión 2023/6.jpg"/>
                  <img src="./Recursos/Unión 2023/7.jpeg"/>
                  <img src="./Recursos/Unión 2023/8.jpeg"/>
                  <img src="./Recursos/Unión 2023/9.jpeg"/>
                  <img src="./Recursos/Unión 2023/10.jpeg"/>
              </div>
          </h2>

          <h2 className="img-evento ms-auto">Fuel Wars 2023
              <div class="img-container">
                  <img src="./Recursos/FUEL 2023/1.JPG"/>
                  <img src="./Recursos/FUEL 2023/2.JPG"/>
                  <img src="./Recursos/FUEL 2023/3.JPG"/>
                  <img src="./Recursos/FUEL 2023/4.JPG"/>
                  <img src="./Recursos/FUEL 2023/5.JPG"/>
              </div>
          </h2>

          <h2 className="img-evento ms-auto">Reinos Enfrentados VII
              <div class="img-container">
                  <img src="./Recursos/Reinos VII/1.jpeg"/>
                  <img src="./Recursos/Reinos VII/2.jpeg"/>
                  <img src="./Recursos/Reinos VII/3.jpeg"/>
                  <img src="./Recursos/Reinos VII/4.jpeg"/>
                  <img src="./Recursos/Reinos VII/5.jpeg"/>
                  <img src="./Recursos/Reinos VII/6.jpeg"/>
                  <img src="./Recursos/Reinos VII/7.jpeg"/>
              </div>
          </h2>

          <h2 className="img-evento ms-auto">Omnia. La ruina de Val'Sacer
              <div class="img-container">
                  <img src="./Recursos/OMNIA abril/1.JPG"/>
                  <img src="./Recursos/OMNIA abril/2.JPG"/>
                  <img src="./Recursos/OMNIA abril/3.JPG"/>
                  <img src="./Recursos/OMNIA abril/4.JPG"/>
                  <img src="./Recursos/OMNIA abril/5.JPG"/>
              </div>
          </h2>

          <h2 className="img-evento ms-auto">Reinos Enfrentados VI
              <div class="img-container">
                  <img src="./Recursos/Reinos VI/1.jpg"/>
                  <img src="./Recursos/Reinos VI/2.jpg"/>
                  <img src="./Recursos/Reinos VI/3.jpg"/>
                  <img src="./Recursos/Reinos VI/4.jpg"/>
                  <img src="./Recursos/Reinos VI/5.jpg"/>
                  <img src="./Recursos/Reinos VI/6.jpg"/>
                  <img src="./Recursos/Reinos VI/7.jpg"/>
              </div>
              
          </h2>

          <h2 className="img-evento ms-auto">Unión 2022
              <div class="img-container">
                  <im
                  g src="./Recursos/Unión 2022/1.JPG"/>
                  <img src="./Recursos/Unión 2022/2.jpg"/>
                  <img src="./Recursos/Unión 2022/3.jpg"/>
                  <img src="./Recursos/Unión 2022/4.jpg"/>
                  <img src="./Recursos/Unión 2022/5.jpg"/>
                  <img src="./Recursos/Unión 2022/6.jpg"/>
                  <img src="./Recursos/Unión 2022/7.jpg"/>
                  <img src="./Recursos/Unión 2022/8.jpg"/>
                  <img src="./Recursos/Unión 2022/9.jpg"/>
              </div>
          </h2>
       
      </>
    );
}
function Taller() {
    return (
      <>
        <p>En nuestro grupo, tan variopinto, no podían faltar nuestros maravillosos artesanos. Con la ilusión de poder
        poner sus habilidades al servicio de todas nuestras aventuras, nuestro equipo de Taller tiene grandes
        planes.<br/> Por aquí compartiremos los avances que realicen.
        </p>
        <p>Actualmente estamos trabajando en:<br/>
            - Armas de asedio<br/>
            - Un nuevo armero, para sumarlo al anterior<br/>
            - Atrezzo para el evento de Unión<br/>
            - Atrezo para el evento de Fuel Wars<br/>
            - Muchas más cosas. No os vamos a desvelar todo antes de tiempo... ;)
        </p>
      </>
    );
}

function Enlaces() {
  return (
    <>
      <p>Si quieres enterarte de todo lo antes posible, te recomendamos que nos sigas en <a href="https://www.instagram.com/cuervos_del_alba/" class="social-button instagram"/></p>


    </>
  );
}
function App() {
    return (
        
        <Router>
            <header className="logo">
                <Navbar.Brand className="mx-auto ">
                    <h1 className="navbar-brand-text  text-center cuervos-del-alba" style= {{color:"wheat" }}>
                        <Link to="/" className="brand-link ">
                            <img src="./Recursos/logo cuervos vector moneda.svg"/> Cuervos del Alba
                        </Link>
                    </h1>
                </Navbar.Brand>
                <Navbar bg="light"className="navbar-bg justify-content-left" expand="lg" inverse collapseOnSelect>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="nav nav-pills flex-column flex-sm-row">
                        <Nav className="me-auto  ">
                            <NavItem as={Link} to="/" className="flex-sm-fill nav-link active ms-5" style= {{color:"wheat" }}>
                            <img src="./Recursos/castillo.svg"/> Sobre nosotros
                            </NavItem>
                            <NavItem as={Link} to="/sobre-vignar" className="flex-sm-fill nav-link active ms-5" style= {{color:"wheat" }}>
                            <img className="cuervo" src="./Recursos/logo cuervos vector.svg"/> Sobre Vignar
                            </NavItem>
                            <NavItem as={Link} to="/eventos" className="flex-sm-fill nav-link active ms-5" style= {{color:"wheat" }}>
                            <img src="./Recursos/tablon.svg"/> Eventos
                            </NavItem>
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/galeria" className="flex-sm-fill nav-link active me-5" style= {{color:"wheat" }}>
                            <img src="./Recursos/caballete.svg"/> Galería
                            </Nav.Link>
                            <Nav.Link as={Link} to="/taller" className="flex-sm-fill nav-link active me-5"style= {{color:"wheat" }}>
                            <img className="yunke" src="./Recursos/yunke.svg"/> Taller
                            </Nav.Link>
                            <Nav.Link as={Link} to="/enlaces-de-interes" className="flex-sm-fill nav-link active me-5"style= {{color:"wheat" }}>
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
        
       
    );
}
export default App;


