import {Card, Col, Container, Row, Image} from "react-bootstrap";
import duneImage from "../assets/images/trending/dunef.jpg";
import batMan from "../assets/images/trending/bm.jpeg"
import ironMan from "../assets/images/trending/im.jpg"
import joKer from "../assets/images/trending/joker.jpg"
import thOr from "../assets/images/trending/thor.jpeg"
import veNom from "../assets/images/trending/venom.jpg"
const Trending = () => {
    return (
        <Container>
            <br></br><br></br>
            <h1 className="text-white">TRENDING MOVIES</h1>
            <Row>

                {/* Gambar 1 */}
                <Col md={4} className="movieWrapper" id="trending">
                    <Card className="movieImage">
                        <Image src={duneImage} alt="Dune Image" height={400}/>
                        <div className="bg-dark ">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Dune Movies</Card.Title>
                                <Card.Text className="text-left">
                                    Dune is a 2021 American epic science fiction film directed by Denis Villeneuve from a screenplay by Villeneuve, Jon Spaihts, and Eric Roth.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>

                {/* Gambar 2 */}
                <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={batMan} alt="batman image" height={400}/>
                        <div className="bg-dark ">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Batman Movies</Card.Title>
                                <Card.Text className="text-left">
                                    Batman (1943) · Batman and Robin (1949) · Batman (1966) · Batman (1989) · Batman Returns (1992) · Batman: Mask of the Phantasm (1993) · 
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>

                {/* Gambar 3 */}
                <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={ironMan} alt="ironman image" height={400}/>
                        <div className="bg-dark ">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Ironman Movies</Card.Title>
                                <Card.Text className="text-left">
                                    Iron Man is a 2008 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed 
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>

                {/* Gambar 4 */}
                <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={joKer} alt="joker image" height={400}/>
                        <div className="bg-dark ">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Joker Movies</Card.Title>
                                <Card.Text className="text-left">
                                    Set in 1981, it follows Arthur Fleck, a failed clown and aspiring stand-up comedian whose descent into insanity and nihilism inspires a violent
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>

                {/* Gambar 5 */}
                <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={thOr} alt="thor image" height={400}/>
                        <div className="bg-dark ">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Thor Movies</Card.Title>
                                <Card.Text className="text-left">
                                    Three sequels have been released: Thor: The Dark World (2013), Thor: Ragnarok (2017), and Thor: Love and Thunder (2022).
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>

                {/* Gambar 6 */}
                <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={veNom} alt="venom image" height={400}/>
                        <div className="bg-dark ">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Venom Movies</Card.Title>
                                <Card.Text className="text-left">
                                    It is the first film in Sony's Spider-Man Universe (SSU) and is directed by Ruben Fleischer from a screenplay by Jeff Pinkner...
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>

            </Row>
        </Container>

    );
}

export default Trending