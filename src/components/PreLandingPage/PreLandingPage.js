import {Container, Col, Row} from 'react-bootstrap';
import sphere from './sphere.gif'
import './PreLandingPage.css'

export default function PreLandingPage ({onRouteChange}) {

    return (
        <Container className="container">
            <Row>
                <Col>
                <a onClick={() => onRouteChange('landingPage')}><img className='gif'  src={sphere} alt='loading'/></a>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="gifText">ultra</p>
                </Col>
            </Row>
        </Container>
    )
}