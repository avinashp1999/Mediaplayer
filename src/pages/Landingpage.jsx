import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Landingpage() {
    return (
        <div className='container'>
            <Row>
                <Col>
                    <h3>Welcome to <span className='text-warning' > Media player</span></h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ratione minus quas
                        cumque explicabo aliquid quam sed quos quis eum praesentium, magni iusto vel consequuntur
                        perferendis nesciunt est, unde repellendusIste dolores minima nulla temporibus nemo laudantium
                        officiis    eniam hic enim architecto, maiores vel odit nihil.  sint excepturi autem. V
                        eius nisi eveniet eligendi, cum earum possimus rem cumque ullam  ipsum vero voluptatum i
                        aliquid natus dicta unde excepturi soluta blanditiis porro mollitia Architecto culpa illum corporis
                        odit corporis assumenda! Eum, magnam. Facere, sequi. d placeat obcaecati, nam Aut nam tenetur maxime.
                    </p>

                    <Link to={'/home'}>
                        <button className='btn btn-warning mt-4'>Get started <i class="fa-solid fa-arrow-right ms-3"></i></button>
                    </Link>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <img style={{ height: '300px' }} src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" />
                </Col>
            </Row>
            <div className='container mt-5 mb-5'>
                <h3>Features</h3>
                <div className='d-flex align-items-center justify-content-evenly'>
                    <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>



                </div>
            </div>
            <div className='container border mb-5 border-2 border-secondary rounded p-5'>
                <Row className='d-flex justify-content-evenly align-items-center'>
                    <div className="col-md-6">
                        <h3 className='text-warning'>simple and powerful</h3>
                        <p><span className='fw-bolder fs-5'>Play Everything:</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti reiciendis ipsa adipisci consequuntur quam sit possimus accusantium voluptatem eveniet, sint ullam itaque veniam, voluptatibus ab maiores, labore deserunt quaerat. Eveniet?
                            Nemo fuga, nihil  autem consequatur omnis. Veritatis maxime ex doloremque </p>
                            <p><span className='fw-bolder fs-5'>Play Everything:</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti reiciendis ipsa adipisci consequuntur quam sit possimus accusantium voluptatem eveniet, sint ullam itaque veniam, voluptatibus ab maiores, labore deserunt quaerat. Eveniet?
                            Nemo fuga, nihil  autem consequatur omnis. Veritatis maxime ex doloremque </p>
                            <p><span className='fw-bolder fs-5'>Play Everything:</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti reiciendis ipsa adipisci consequuntur quam sit possimus accusantium voluptatem eveniet, sint ullam itaque veniam, voluptatibus ab maiores, labore deserunt quaerat. Eveniet?
                            Nemo fuga, nihil  autem consequatur omnis. Veritatis maxime ex doloremque </p>
                    </div>
                    <div className="col-md-6">
                    <iframe width="100%" height="350" src="https://www.youtube.com/embed/ZdMZ40GSVmc" title="Leo - Badass Video | Thalapathy Vijay | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>



                </Row>

            </div>

        </div>


    )
} 

export default Landingpage