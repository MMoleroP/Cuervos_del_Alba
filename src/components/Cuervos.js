import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Cuervos() {
    return (
        <>

            <h2 className="text-center">Sobre Vignar</h2>
            <h3 className="ms-auto">Introducción</h3>
            <p>En el albor de los tiempos, cuando el mundo apenas había comenzado a existir y la oscuridad amenazó con
                devorarlo todo, de entre las sombras nació la encarnación del equilibrio entre la vida y la muerte.</p>
                <p>Surgió Vignar, el Gran Dios Cuervo.</p> 
                <p>Él decide a quién se le da paso en la vida y a quién le ha
                llegado el momento de su muerte. Es una bendición y una advertencia para los que caminamos por este
                mundo</p> 
                <p>Sus seguidores somos sus hijos, bendecidos con su favor y protección por nuestra lealtad, y todos hemos
                sentido la llamada de su esencia ancestral. Nos encargamos de
                preservar el equilibrio en su nombre, impartiendo
                los sabios e implacables juicios de Vignar. Unos que no se nublan ni se dejan engañar por las artimañas
                de los simples mortales. Y, ¡oh de que aquellos que intenten romper su equilibrio!...pronto les llegará su
                último amanecer.
            </p>

            <h3 className="ms-auto">Escritos</h3>
            <div class="escritos">
                <p>Aquí mostramos una recopilación de los escritos sobre Vignar.</p>
                <p> Una colección de profecías
                    sobre sus más devotos aliados. Algunos están escritos por la mismísima pluma Gran Dios,<br /> otros han sido
                    recopilados por sus hijos.
                </p>
                <p> Algunos están perdidos, algunos están por encontrar:</p>
                
                <p class="libro1 text-center">Libro 1º</p>

            <Row className='row-cols-1 row-cols-md-2 row-cols-lg-3  g-4'>
                <Col className='d-flex justify-content-evenly'>
                    <Card className='cantares1' variant="none" style={{ width: '26rem' }}>
                        <Card.Body>
                            <Card.Title className="nombre-cantar mb-4 text-center ">Cantar 2. Sacerdotisa</Card.Title>
                            <Card.Text className='cantar'>Bendita sea la elegida<br />para llevar la palabra de Vignar<br /> a
                                aquellos con oídos agudos.<br />
                                Salve su palabra.<br /> salve Vignar.
                            </Card.Text>
                            <Card.Subtitle className="firma-cantar  text-end text-muted">- Sacerdotisa del templo de Vignar</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className='d-flex justify-content-evenly'>    
                    <Card className='cantares2' variant="none" style={{ width: '26rem' }}>
                        <Card.Body>
                            <Card.Title className="nombre-cantar mb-4 text-center ">Cantar 3. Advertencias</Card.Title>
                            <Card.Text className='cantar'>¡Oh, de aquellos insensatos<br /> que duden de los
                                llamados<br /> hijos e hijas de Vignar!<br />¡Oh, pobres de aquellos<br /> que teman mirar a la muerte<br />
                                a los ojos!
                            </Card.Text>
                            <Card.Subtitle className="firma-cantar text-end text-muted">- Vástago de Vignar</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className='d-flex justify-content-evenly'>    
                    <Card className='cantares3' variant="none" style={{ width: '26rem' }}>
                        <Card.Body>
                            <Card.Title className="nombre-cantar mb-4 text-center ">Cantar 4. Noche</Card.Title>
                            <Card.Text className='cantar'>Noche, y día.<br /> Siempre igual.<br /> Siempre en equilibrio.<br /> Vida, y
                                muerte.<br /> Siempre igual.<br /> Siempre en equilibrio.<br /> Y así debe ser siempre.<br /> Así lo rige
                                Vignar.
                            </Card.Text>
                            <Card.Subtitle className="firma-cantar text-end text-muted">- Hijo de Vignar</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className='d-flex justify-content-evenly'>   
                    <Card className='cantares4' variant="none" style={{ width: '26rem' }}>
                        <Card.Body>
                            <Card.Title className="nombre-cantar mb-4 text-center ">Cantar 5. Silencio</Card.Title>
                            <Card.Text className='cantar'>Sean pues mis hijos<br /> dueños de la noche y su silencio.<br /> Allá
                                donde<br /> lo único cierto<br /> es el silencio.<br /> Allá donde<br /> lo único cierto<br /> es mi palabra.<br />
                                Camindad donde<br /> nada es verdad<br /> y todo es mentira.
                            </Card.Text>
                            <Card.Subtitle className="firma-cantar text-end text-muted">- Hija de Vignar</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col> 

                <Col className='d-flex justify-content-evenly'>   
                    <Card className='cantares1' variant="none" style={{ width: '26rem' }}>
                        <Card.Body>
                            <Card.Title className="nombre-cantar mb-4 text-center ">Cantar 6. La Tormenta</Card.Title>
                            <Card.Text className='cantar'>Así como el río tiene su cauce,<br /> y así como el árbol tiene sus
                                raíces,<br /> como la vida necesita a la muerte,<br />
                                Vignar nos enseña nuestros<br /> cometidos.<br /> Escudriñó los mares mas nada halló <br />y buscó en la
                                tierra sin éxito.<br />Decidido, alzó la vista a los cielos<br /> y allí conoció La Tormenta.<br />Fue entonces
                                que, como Juez,<br />designó a su verdugo.
                            </Card.Text>
                            <Card.Subtitle className="firma-cantar text-end text-muted">- Vergudo de Vignar</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col> 

                <Col className='d-flex justify-content-evenly'>    
                    <Card className='cantares6' variant="none" style={{ width: '26rem' }}>
                        <Card.Body>
                            <Card.Title className="nombre-cantar mb-4 text-center ">Cantar 7. Furia</Card.Title>
                            <Card.Text className='cantar'>En sangre y ceniza<br/> se bañaba la hija<br/> que en su interior<br/> su 
                                energía guardó.<br/> Mas, cuando en batalla<br/> ella lo reclamaba<br/> bajo sus alas, su ira poder le dio.<br/>
                                Teman las huestes,<br/> teman los hombres, pues su poder es<br/> tan grande como<br/> el de su Dios.
                            </Card.Text>
                            <Card.Subtitle className="firma-cantar text-end text-muted">- La furia de Vignar</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className='d-flex justify-content-evenly'>   
                    <Card className='cantares3' variant="none" style={{ width: '26rem' }}>
                        <Card.Body>
                            <Card.Title className="nombre-cantar mb-4 text-center ">Cantar 8. Embrujo</Card.Title>
                            <Card.Text className='cantar'> El padre alado<br/> le concede su poder<br/> y él lo libera a través de
                                Él.<br/> Danza la luz y la oscuridad<br/> al son de su voz,<br/> al son de su don.<br/> Danza el agua,<br/> también 
                                el fuego,<br/> el aire y el viento.<br/> Contra el enemigo<br/> vierten su poder<br/> sus alas a través de él.
                            </Card.Text>
                            <Card.Subtitle className="firma-cantar text-end text-muted">- El Mago</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col> 

                <Col className='d-flex justify-content-evenly'>    
                    <Card className='cantares2' variant="none" style={{ width: '26rem' }}>
                        <Card.Body>
                            <Card.Title className="nombre-cantar mb-4 text-center ">Cantar 9. Espera</Card.Title>
                            <Card.Text className='cantar'>La llamarán Sombra,<br/> pues la saqué de la oscuridad.<br/> La llamarán
                                Filo,<br/> pues ejercerá mi juicio.<br/> No empuñará su espada<br/> si no es por mí.<br/> Aguardará alerta mi veredicto.
                                <br/> Nunca antes,<br/> nunca después.<br/> Afrecerá consuelo o desazón<br/> sólo siguiendo mis designios.
                            </Card.Text>
                            <Card.Subtitle className="firma-cantar text-end text-muted">- Hija de Vignar</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className='d-flex justify-content-evenly'>    
                    <Card className='cantares1' variant="none" style={{ width: '26rem' }}>
                        <Card.Body>
                            <Card.Title className="nombre-cantar mb-4 text-center ">Cantar 10. Aguijón</Card.Title>
                            <Card.Text className='cantar'>Aquél que es uno con la noche,<br/> se convierte en la noche.<br/>
                                Misteriosa, oscura, letal.<br/> Aquél que es la noche<br/> cumple su voluntad con vehemencia.<br/> Certero, ineludible, 
                                audaz.<br/> Tal es la enseñanza<br/> que Vignar le otorgó.<br/> Tal es la senda de Su Cazador.<br/> Una brisa en las hojas,
                                <br/> el ululato de un búho,<br/> el brillo de unos ojos.<br/> Un crujido de madera,<br/> un latigazo sordo,<br/> 
                                un cuerpo cayendo.<br/> Un encargo cumplido,<br/> una recompensa en oro.<br/> un Dios satisfecho.
                            </Card.Text>
                            <Card.Subtitle className="firma-cantar text-end text-muted">- El Cazador de Vignar</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className='d-flex justify-content-evenly'>
                    <Card className='cantares4' variant="none" style={{ width: '26rem' }}>
                        <Card.Body>
                            <Card.Title className="nombre-cantar mb-4 text-center "> Cantar 12. justicia</Card.Title>
                            <Card.Text className='cantar'>Quienes temen la verdad<br/> de la muerte, no alcanzan a ver en su error,<br/>
                                pues el nuestro<br/> es un camino honorable.<br/>
                                El equilibrio brinda control,<br/> como la paz conduce a la guerra.<br/> No habéis de olvidar que<br/> una gran sombra<br/>
                                no es proyectada<br/> si no por una radiante luz.<br/>Nuestra mano es guiada por Su rectitud</Card.Text>
                            <Card.Subtitle className="firma-cantar text-end text-muted">- El Paladín de Vignar</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className='d-flex justify-content-evenly'>
                    <Card className='cantares6' variant="none" style={{ width: '26rem' }}>
                        <Card.Body>
                            <Card.Title className="nombre-cantar mb-4 text-center ">Cantar 13. Despertar</Card.Title>
                            <Card.Text className='cantar'>Escuchó atento el viento,<br/> y Él lo llamó.<br/> Escuchó atento cómo caían<br/> 
                                sus plumas, como hojas de otoño,<br/>
                                y le vió.<br/> Escuchó su graznido,<br/> mas no era lejano,<br/> y su sonido lo envolvió,<br/> y le dio la fuerza para
                                levantarse.<br/> Se miraron a los ojos<br/> y, con un gesto firme, le reverenció.<br/> Inició su paso firme y seguro,<br/>
                                sobre la senda llena de plumas,<br/> sobre el camno del euilibrio,<br/> sobre la senda sin fin.<br/> Allá donde Él guíe 
                                sus pasos<br/> y su espada
                            </Card.Text>
                            <Card.Subtitle className="firma-cantar text-end text-muted">- Samurái de Vignar
                            </Card.Subtitle>
                    </Card.Body></Card>
                    
                    </Col>
         </Row>       
            </div>

           
        </>
    );
}

export default Cuervos;