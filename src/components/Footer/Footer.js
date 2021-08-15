import Navbar from 'react-bootstrap/Navbar'
import {Container} from 'react-bootstrap'
import './Footer.css'


export default function Footer() {
    return (
        <div>
                <Navbar id='footer' fixed='bottom'  bg="none" variant='light'>
                    <Container>
                        <Navbar.Collapse className="justify-content-center">
                        <Navbar.Text >
                            ultra 2021
                        </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                 </Navbar>

        </div>

    )
}