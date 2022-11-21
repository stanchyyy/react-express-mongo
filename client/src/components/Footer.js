import "./styles/Footer.css"
import Navbar from 'react-bootstrap/Navbar';

const year = new Date().getFullYear();
const copyright = `Copyright \u00A9 MERN-Pizza ${year}`;

function Footer(){
    return(
        <Navbar bg="light" expand="lg">
            <footer variant="primary">{copyright}</footer>
        </Navbar>
)}

export default Footer;