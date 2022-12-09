import {Card, Col, Container, Row, Image} from "react-bootstrap";
import doctorStrange from "../assets/images/superhero/ds.jpg";
import huLk from "../assets/images/superhero/hulk.webp"
import antMan from "../assets/images/superhero/ant.jpg"
import spiderMan from "../assets/images/superhero/spd.jpg"
import robinHood from "../assets/images/superhero/rh.jpg"
import superMan from "../assets/images/superhero/spm.jpg"
const Superhero = () => {
    return (
        <Container>
            <br></br><br></br>
            <h1 className="text-white">SUPERHERO MOVIES</h1>
            <Row>

                {/* Gambar 1 */}
                <Col md={4} className="movieWrapper" id="superhero">
                    <Card className="movieImage">
                        <Image src={doctorStrange} alt="Doctor strange Image" height={400}/>
                        <div className="bg-dark ">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Doctor Strange</Card.Title>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>

                {/* Gambar 2 */}
                <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={huLk} alt="hulk image" height={400}/>
                        <div className="bg-dark ">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Hulk</Card.Title>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>

                {/* Gambar 3 */}
                <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={antMan} alt="antman image" height={400}/>
                        <div className="bg-dark ">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Antman</Card.Title>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>

                {/* Gambar 4 */}
                <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={spiderMan} alt="spiderman image" height={400}/>
                        <div className="bg-dark ">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">spiderman</Card.Title>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>

                {/* Gambar 5 */}
                <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={robinHood} alt="robin hood image" height={400}/>
                        <div className="bg-dark ">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Robinhood</Card.Title>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>

                {/* Gambar 6 */}
                <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={superMan} alt="superman image" height={400}/>
                        <div className="bg-dark ">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Superman</Card.Title>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <br></br><br></br>
            </Row>
        </Container>

    );
}

export default Superhero